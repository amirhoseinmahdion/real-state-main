import styles from "./detailprofilepage.module.css"

import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineVilla } from 'react-icons/md';
import { GiPostOffice } from 'react-icons/gi';
import { MdApartment } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { e2p, sp } from "@/utils/Replacenumber";
import Sharebtn from "@/module/Sharebtn";

const Detailprofilepage = ({data}) => {
    const { title,
    describtion,
    address,
    phonenumber,
    price,
    whereprofile,
    constructionDate,
    categoriy,
    rules,
    amenities} = data
   
    return (
        <div className={styles.container}>
           <div className={styles.main}>
            <h1>{title}</h1>
            <span><HiOutlineLocationMarker/>{address}</span>
            <h3 className={styles.title}>توضیحات</h3>
            <p>{describtion}</p>
            <h3 className={styles.title}>امکانات</h3>
            {amenities.length ?<ul> {amenities.map((ameniti ,index) => <li key={index}>{ameniti}</li>)}</ul>:(<p>هیچ موردی ذکر نشده است</p>)}
            <h3 className={styles.title}>قوانین</h3>
            {rules.length ?<uL>{rules.map((rule,index)=> <li key={index}>{rule}</li>)}</uL>:(<p>هیچ موردی ذکر نشده است</p>)}

           </div>
           <div className={styles.sidebar}>
           
                <div className={styles.realState}>
                    <SiHomebridge/>
                    <p>املاک {whereprofile}</p>
                    <span><AiOutlinePhone/>{e2p(phonenumber)}</span>
                
            </div>
            
               <Sharebtn/>

           
            <div className={styles.price}>
                {categoriy === "vilaa" ?<p><MdOutlineVilla/>{categoriy}</p> :null}
                {categoriy === "apartmen" ?<p><MdApartment/>{categoriy}</p> :null}
                {categoriy === "office" ?<p><GiPostOffice/>{categoriy}</p> :null}
                {categoriy === "shop" ?<p><BiStore/>{categoriy}</p> :null}
                <p>{sp(price)} تومان</p>
                <p><BiCalendarCheck/>{constructionDate.toLocaleDateString('fa-IR')}</p>

            </div>
           </div>
        </div>
    );
};

export default Detailprofilepage;