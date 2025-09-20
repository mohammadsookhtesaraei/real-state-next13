import type { Metadata } from "next";

import "./globals.css";

import { yekan } from "@/utils/font";




export const metadata:Metadata = {
  title: "املاک | پروژه بوتواستارت",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
       className={yekan.className}
      >
        {children}
      </body>
    </html>
  );
}
