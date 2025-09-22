// برای مدیریت احراز هویت کتابخونه نکست ایوث ایمپورت میشه
import NextAuth, { AuthOptions } from "next-auth";

// پرووایدر برای لاگین با ایمیل و پسوورد
import CredentialsProvider from "next-auth/providers/credentials";

// ایمپورت مدل یوزط
import User from "@/models/User";

// ایمپورت صحت سنجی پسسورد
import { verifyPassword } from "@/utils/auth";

// ایمپورت اتصال به دیتا بیس
import connectDB from "@/utils/connectDB";


// تنظیمات سشن و پروایدرهایی که داریم
export const authOptions: AuthOptions = {

    // سشن برای ذخیره چی دبلیو تی
  session: { strategy: "jwt" },

// وردی های پروایدر لیست
  providers: [

    // تعریف پروایدر براساس ایمیل و پسسورد
    CredentialsProvider({

        // نامی که در فرم لاگشین نشان داده میشود
      name: "Credentials",

    //   فیلدهایی که در فرم لاگین نمایش داده میشود
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },


    //   تابعی که هنگام ارسال فرم لاگین اجرا میشود
      async authorize(credentials) {

        // خواندن مقادیر ایمیل و پسورد از فرم
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        // اگر ایمیل یا پسوورد خالی بود خطا بده
        if (!email || !password) {
          throw new Error("لطفا ایمیل و رمز عبور را وارد کنید");
        }

        // اتصال به دیتا بیس

        await connectDB();

        // جستجوی کاربر با ایمیل در دیتا بیس
        const user = await User.findOne({ email });

        // اگر کاربری با این ایمیل نبود خطا برگردان
        if (!user) throw new Error("حسابی با این ایمیل یافت نشد");

        // بررسی صحت پسورد وارد شده
        const isValid = await verifyPassword(password, user.password);

        // اگر پسوورد درست نبود خطا برگردان
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");
        
        // اگر همه چیز درست بود اطلاعات کامل کاربر را برگردان
        return { id: user._id.toString(), email: user.email };
      },
    }),
  ],
};

// در اپ روتر باید هندلر ساخت

const handler = NextAuth(authOptions);

// گت و پست برای خروجی گرفتن از هندلر
export { handler as GET, handler as POST };
