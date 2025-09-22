"use client";

import { useState } from "react";

import styles from "@/template/singUpPage/SingUpPage.module.css";
import Link from "next/link";

const SingUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="">ایمیل</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>تکرار رمز عبور:</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button type="submit">ثبت نام</button>
      </form>
      <p>حساب کاربری دارید؟
        <Link  href={"/singin"}>ورود</Link>
      </p>
    </div>
  );
};

export default SingUpPage;
