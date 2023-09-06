"use client"
import { AiOutlineShareAlt } from "react-icons/ai";
import styles from './sharebtn.module.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useEffect, useState } from "react";



const Sharebtn = () => {
    const [url , seturl] = useState("")
    useEffect(() => {
        seturl(window.location.href)
    },[])


    return (
        <CopyToClipboard text={url}>
        <div className={styles.container} >
            <AiOutlineShareAlt/>
            <button> اشتراک گذاری</button>
        </div>
        </CopyToClipboard>
    );
};

export default Sharebtn;
