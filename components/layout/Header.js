"use client";
import { FiLogIn } from "react-icons/fi";
import styles from "@/layout/header.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { data, status } = useSession();
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">اگهی ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.login}>
        {status === "authenticated" ? (
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        ) : (
          <Link href="/signup">
            <FiLogIn />

            
            <span>ورود</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
