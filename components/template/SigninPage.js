"use client";
import { useState } from "react";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import { Audio } from "react-loader-spinner";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const signinhandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
   
  };
  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
      <form>
        <label>ایمیل:</label>
        <input
          value={email}
          type="Text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label> رمزعبور:</label>
        <input
          value={password}
          type="Text"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <Audio
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{ margin: "auto" }}
            wrapperClass="wrapper-class"
            visible={true}
          />
        ) : (
          <button type="Submit" onClick={signinhandler}>
            ورود
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SigninPage;
