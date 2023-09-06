"use client";
import styles from "./Dashboardcard.module.css";
import Cardprofile from "./Cardprofile";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";




const Dashboardcard = ({ data }) => {
    const router = useRouter()
   
    const deletehandler =  async() => {
        const res = await fetch(`/api/profile/delelteprofile/${data._id}`, {
          method: "DELETE",
        });
        const oneprofile = await res.json();
        if(oneprofile){
            toast.success(oneprofile.message)
            router.refresh();
            router.push("/dashboard/my-profile")
        }else{
            toast.error(oneprofile.error)
        }
    
      };
  
   
  const editehandler = () => {
    router.push(`/dashboard/my-profile/${data._id}`)

  };
  
  return (
    <div className={styles.container}>
      <Cardprofile data={data} />
      <div className={styles.main}>
        <button onClick={editehandler}>
          <AiOutlineEdit />
          ویرایش
        </button>
        <button onClick={deletehandler}>
          <AiFillDelete />
          حذف اگهی
        </button>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Dashboardcard;
