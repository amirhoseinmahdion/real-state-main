import User from "@/models/userschema";
import ConnectDB from "@/utils/ConnectDB";
import { hashPassword } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "در تکمیل فر م مشکل وجود دارد",
        status: 422,
      });
    }
    
    const userexist = await User.findOne({ email });
    if (userexist) {
      return NextResponse.json({
        error: "شما قبلا ثبت نام کرده اید",
        status: 422,
      });
    }

    const savepassword = await hashPassword(password);

    const Newuser = await User.create({email:email,password:savepassword})
    console.log(Newuser);

    return NextResponse.json({
      message: " حساب کاربری با موفقیت ساخته شد",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
