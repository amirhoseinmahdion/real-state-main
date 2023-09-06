
import Profile from "@/models/profileschema";
import User from "@/models/userschema";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req,context) {
  try {
    await ConnectDB();
         
    const id = context.params.profileID

   

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({
        message: " شما تایید هویت نشده اید   ",
        status: 401,
      });
    }
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({
        error: "  حساب کاربری یافت نشد  ",
        status: 404,
      });
    }
    
    const profile = await Profile.findOne({ _id :id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json({
        message: "        دسترسی شما به این اگهی محدود شده است   ",
        status: 403,
      });
    }
  
     await Profile.deleteOne({ _id :id})
    return NextResponse.json({ message: "با موفقیت اگهی حذف شد", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "مشکل در سرور وجود دارد", status: 500 });
  }
}
