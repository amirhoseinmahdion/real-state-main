import Profile from "@/models/profileschema";
import User from "@/models/userschema";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    await ConnectDB();

    const {
      _id,
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
    if (
      !_id ||
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
    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json({
        message: "        دسترسی شما به این اگهی محدود شده است   ",
        status: 403,
      });
    }
    if (!profile) {
      return NextResponse.json({
        message: "     همچین اگهی وجود ندارد   ",
        status: 404,
      });
    }
    profile.title = title;
    profile.describtion = describtion;
    profile.address = address;
    profile.phonenumber = phonenumber;
    profile.price = price;
    profile.whereprofile = whereprofile;
    profile.constructionDate = constructionDate;
    profile.categoriy = categoriy;
    profile.rules = rules;
    profile.amenities = amenities;
    profile.save();
    return NextResponse.json({ message: "تغیرات با موفقیت انجام شد", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "مشکل در سرور وجود دارد", status: 500 });
  }
}
