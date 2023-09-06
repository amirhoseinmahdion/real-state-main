import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Profile from "@/models/profileschema";
import User from "@/models/userschema";
import Dashboardasidebar from "@/layout/Dashboardasidebar";
import Adminpage from "@/template/Adminpage";

export const metadata ={
  title:" پنل ادمین املاک | پروژه مهدیون ",
  description:"سایت خرید و فروش ملک",
}

const Adminuser = async () => {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashbord");

  const profiles = await Profile.find({published : false});
 

  
  return (
    <Dashboardasidebar>
      <Adminpage profiles={profiles}/>
     
    </Dashboardasidebar>
  );
};

export default Adminuser;
