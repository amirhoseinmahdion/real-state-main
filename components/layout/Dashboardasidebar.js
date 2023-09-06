import { getServerSession } from "next-auth";
import styles from "./Dashboardasidebar.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import Logoutbtn from "@/module/Logoutbtn";
import ConnectDB from "@/utils/ConnectDB";
import User from "@/models/userschema";

const Dashboardasidebar = async ({ children }) => {
  const session = await getServerSession(authOptions);
  await ConnectDB()
  const user = await User.findOne({email:session.user.email})
  

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <BsPersonCircle />
        {user.role === "ADMIN" ? "admin" : null}
        <p>{session ?session.user.email:null}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profile">اگهی های من</Link>
        <Link href="/dashboard/add">ثبت اگهی</Link>
        {user.role === "ADMIN" ?<Link href="/admin">   در انتظار تایید</Link> : null} 
        <Logoutbtn/>
      </div>
     
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Dashboardasidebar;
