"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-bg-header text-white p-5 my-5 rounded-sm">
      <div>
        <ul className="flex space-x-[1.87rem] ">
          <li>
            <Link href="/">صفحه‌اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی‌ها</Link>
          </li>
        </ul>
      </div>

      <div className=" bg-white text-bg-header rounded-sm py-1 px-2 transition delay-150 ease-in-out hover:bg-blue-700 hover:text-white">
        <Link className="flex items-center" href="/signin">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
