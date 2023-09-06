import Link from "next/link";
import styles from "./sidebarpage.module.css"
import { AiTwotoneFilter } from 'react-icons/ai';

const Sidebarpage = () => {
    return (
        <div className={styles.container}>
            <p><AiTwotoneFilter/>دسته بندی</p>
            <Link href={{pathname:"/buy-residential"}}>همه</Link>
         <Link href={{pathname:"/buy-residential",query:{categoriy:"vilaa"}}}>ویلا</Link>
        <Link href={{pathname:"/buy-residential",query:{categoriy:"office"}}}> دفتر</Link>
        <Link href={{pathname:"/buy-residential",query:{categoriy:"apartmen"}}}>اپارتمان</Link>
        <Link href={{pathname:"/buy-residential",query:{categoriy:"shop"}}}>مغازه</Link>
        </div>
    );
};

export default Sidebarpage;