"use client";
import { useState } from "react";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import { Audio } from "react-loader-spinner";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signuphandler = async (e) => {
    e.preventDefault();
    if (password !== repassword) {
      toast.error("رمز عبور با تکرار رمز یکی نیست ");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.status === 201) {
      router.push("/signin");
      toast.success(data.message)
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
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

        <label> تکرار رمز عبور:</label>
        <input
          value={repassword}
          type="Text"
          onChange={(e) => setRepassword(e.target.value)}
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
          <button type="Submit" onClick={signuphandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignupPage;
