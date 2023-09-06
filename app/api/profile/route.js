import Profile from "@/models/profileschema";
import User from "@/models/userschema";
import ConnectDB from "@/utils/ConnectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await ConnectDB();
    const {
      title,
      describtion,
      address,
      phonenumber,
      price,
      whereprofile,
      constructionDate,
      categoriy,
      rules,
      amenities,
    } = await req.json();

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json({
        error: " شما تایید هویت نشده اید لطفا ثبت نام کنید   ",
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

    if (
      !title ||
      !describtion ||
      !address ||
      !phonenumber ||
      !price ||
      !whereprofile ||
      !constructionDate ||
      !categoriy
    ) {
      return NextResponse.json({
        error: "لظفا اطلاعات را کامل وارد کنید",
        status: 400,
      });
    }

    const profile = await Profile.create({
      title,
      describtion,
      address,
      phonenumber,
      price: +price,
      whereprofile,
      constructionDate,
      categoriy,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });
    console.log(profile);
    return NextResponse.json({ message: "با موفیقت اگهی ثبت شد", status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "مشکل در سمت سرور هست", status: 500 });
  }
}

export async function GET(req) {
  try {
    await ConnectDB();

    const profiles = await Profile.find({ published: true }).select("-userId");

    return NextResponse.json({ status: 200, data: profiles });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در اتصال به وجود امده",
      status: 500,
    });
  }
}

