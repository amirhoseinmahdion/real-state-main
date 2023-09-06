"use client";
import { FiLogOut } from "react-icons/fi";
import styles from "./Logoutbtn.module.css"
import { signOut } from "next-auth/react";
const Logoutbtn = () => {
    const logouthandler = () => {
        signOut()
    }
  return (
    <button onClick={logouthandler} className={styles.button}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default Logoutbtn;
