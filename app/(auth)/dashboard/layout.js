import Dashboardasidebar from "@/layout/Dashboardasidebar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const metadata ={
  title:"  پنل کاربری املاک | پروژه مهدیون" ,
  description:"سایت خرید و فروش ملک",
}

const Dashboardlayout = async({ children }) => {
    const session = await getServerSession(authOptions)
    if(!session) return redirect("/signup")
  return <Dashboardasidebar>{children}</Dashboardasidebar>;
};

export default Dashboardlayout;
