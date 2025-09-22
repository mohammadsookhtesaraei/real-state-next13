import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

import { hashPassword } from "@/utils/auth";

// ایجاد تابع پست
export async function POST(req: Request) {

    try {

        // اتصال به دیتا بیس
        await connectDB();

        // گرفتن ایمیل و پسورد از ریکویست فرانت

        const { email, password } = await req.json();
        console.log(email, password);
        
        // اگر پسورد و ایمیل وجود نداشت
        if (!email || !password) {
            return NextResponse.json({
                error: "لطفا اطلاعات معتبر وارد کنید",
                status: 422
            })
        }

        // اگر کاربر اکانت ساخته بود با این ایمیل

        const existingUser = await User.findOne({ email });
        console.log(existingUser);
    //   چک کردن این که کاربر از قبل وجو داشته یا نه
        if (existingUser) {
            return NextResponse.json({
                error: "این حساب کاربری وجود دارد",
                status: 422
            })
        };
        //  اگر باره اولش هست بیاد هش پسوورد بیاره و از مدل یوزر یک یوزر جدید بسازه طبق مدل یوزر

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });

        console.log(newUser);

        // در اخرم ریپسانس موفقیت ثبت نام ری ترن بشه

        return NextResponse.json({
            message: "حساب کار بری ایجاد شد"

        })

    //    اگر ارور وجو داشت
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    //   ریسپانس خطای ارور
        return NextResponse.json({
            error: "مشکل از سرور است",
            status: 500
        })
    }

}