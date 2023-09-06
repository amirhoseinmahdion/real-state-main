
import { getServerSession } from "next-auth";
import styles from "./dashboardpage.module.css"
import { FcLike } from "react-icons/fc";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ConnectDB from "@/utils/ConnectDB";
import User from "@/models/userschema";

const Dashboardpage = async() => {
    await ConnectDB()
    const session = await getServerSession(authOptions)
    const user = await User.findOne({email:session.user.email})
    
   
    
    return (
        <div className={styles.container}>
        <h3>سلام<FcLike/></h3>
<p>اگهی های خود را ثبت کنید تا هزاران نفر ان را مشاهده کنند</p>
<div className={styles.createdAt}>
        <p>تاریخ عضویت:{user.createdAt.toLocaleDateString('fa-IR')}</p>
        <span></span>
        </div>
        </div>
    );
};

export default Dashboardpage;