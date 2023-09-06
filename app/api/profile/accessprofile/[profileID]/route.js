import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/profileschema";
import User from "@/models/userschema";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req,context) {
    try {
      await ConnectDB();
      
      const id = await context.params.profileID
      
  
      const session = await getServerSession(authOptions);
      if (!session) {
        return NextResponse.json({
          error: " شما تایید هویت نشده اید لطفا ثبت نام کنید   ",
          status: 401,
        });
      }
  
      const user = await User.findOne({ email: session.user.email });
      if (!user.role === "ADMIN") {
        return NextResponse.json({
          error: "     شما دسترسی به این کار را ندارد   ",
          status: 401,
        });
      }
      const profile = await Profile.findOne({_id : id})
      if(!profile){
        return NextResponse.json({
          error: "     همچین اگهی وجود ندارد ",
          status: 403,
        });
      }
  
      profile.published =true;
      profile.save()

      return NextResponse.json({message:"اگهی با موفیقت انتشار یافت" ,status:200})
    } catch (error) {
      return NextResponse.json({ error: "مشکل در سرور وجود دارد", status: 500 });
    }
  }
  