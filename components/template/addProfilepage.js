"use client";
import { useEffect, useState } from "react";
import styles from "./addprofilepage.module.css";
import Textinput from "@/module/Textinput";
import Radiolist from "@/module/Radiolist";
import Textlist from "@/module/Textlist";
import CustomeDate from "@/module/CustomeDate";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Bars } from "react-loader-spinner";

const AddProfilepage = ({data}) => {
 
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profiledata, setProfiledata] = useState({
    title: "",
    describtion: "",
    address: "",
    phonenumber: "",
    price: "",
    whereprofile: "",
    constructionDate: new Date(),
    categoriy: "",
    rules: [],
    amenities: [],
  });

 useEffect(()=>{
  if(data) setProfiledata(data)
 },[])
  const editeprofile = async() => {
    setLoading(true)
    const res = await fetch("/api/profile/editeprofile", {
      method: "PATCH",
      body:JSON.stringify(profiledata),
      headers:{ "Content-Type": "application/json" }

    });
    const data = await res.json();
    setLoading(false)
    if(data){
      toast.success(data.message)
      router.refresh();
      router.push("/dashboard/my-profile")
    }else{
      toast.error(data.error)
      
    }
  }
  const createprofilehandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profiledata),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      router.replace("/dashboard");
    }
  };
  return (
   
    <div className={styles.container}>
      <h3> {data ? "تغیرات اگهی":"ثبت اگهی"}</h3>
      <Textinput
        name="title"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        title="عنوان اگهی"
      />
      <Textinput
        name="describtion"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        title=" توضیحات"
        textarea={true}
      />
      <Textinput
        name="address"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        title=" ادرس"
      />
      <Textinput
        name="phonenumber"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        title=" شماره تماس"
      />
      <Textinput
        name="price"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        title=" قیمت(تومان)"
      />
      <Textinput
        name="whereprofile"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        title="بنگاه"
      />
      <Radiolist profiledata={profiledata} setProfiledata={setProfiledata} />
      <Textlist
        title="امکانات رفاهی"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        name="amenities"
      />
      <Textlist
        title=" قوانین"
        profiledata={profiledata}
        setProfiledata={setProfiledata}
        name="rules"
      />
      <CustomeDate profiledata={profiledata} setProfiledata={setProfiledata} />
      {loading ? (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{margin:"auto"}}
          wrapperClass=""
          visible={true}
        />
      ) : data ?  (
        <button onClick={editeprofile} className={styles.submit}>
            تغیرات اگهی
        </button>
      ) : (
        <button onClick={createprofilehandler} className={styles.submit}>
           ثبت اگهی
        </button>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddProfilepage;
