"use client";
import { sp } from "@/utils/Replacenumber";
import styles from "./admincard.module.css";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Admincard = ({ data }) => {
  const { title, price, describtion, address, _id } = data;
  const router = useRouter();
  const deletehandler = async () => {
    const res = await fetch(`/api/profile/delelteprofile/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.error) {
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(error.message);
    }
  };

  const publishedhandler = async () => {
    const res = await fetch(`/api/profile/accessprofile/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();

    if (!result.error) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{describtion}</p>
      <div className={styles.properties}>
        <span>{address}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishedhandler}>انتشار</button>
      <button onClick={deletehandler}>حدف</button>
      <Link href={`/admin/${_id}`}>مشاهده اگهی</Link>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Admincard;
