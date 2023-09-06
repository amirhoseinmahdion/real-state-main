import User from "@/models/userschema";
import ConnectDB from "@/utils/ConnectDB";
import { verifypassword } from "@/utils/auth";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions =  {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await ConnectDB();

          if (!email || !password) {
            throw new Error("در تکمیل فر م مشکل وجود دارد");
          }
          const userexist = await User.findOne({email});
          if (!userexist) {
            throw new Error("شما تا حالا ثبت نام نکردید لظفا ثبت نام کنید");
          }

          const comparepassword = await verifypassword(password, userexist.password);
          if (!comparepassword) {
            throw new Error("   ایمیل یا رمز عبور اشتباه است ");
          }

          return { email };
        } catch (error) {
          console.log(error);
          throw new Error("مشکلی در سرور رخ داده است");
        }
      },
    }),
  ],
};


const handler = NextAuth(authOptions)

export {handler as POST , handler as GET}