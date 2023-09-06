
import styles from './Cardprofile.module.css'
import { MdOutlineVilla } from 'react-icons/md';
import { GiPostOffice } from 'react-icons/gi';
import { MdApartment } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import { AiFillCaretLeft } from 'react-icons/ai';
import Link from 'next/link';
import { sp } from '@/utils/Replacenumber';



const Cardprofile = ({data}) => {
    const {categoriy,price,whereprofile,title,_id} = data
    return (
        <div className={styles.container}>
         <div className={styles.icon}>
            {categoriy == "vilaa" ? <MdOutlineVilla/> : null }
            {categoriy == "apartmen" ? <MdApartment/> : null }
            {categoriy == "shop" ? <BiStore/> : null }
            {categoriy == "office" ? <GiPostOffice/> : null }
         </div>
         <p className={styles.title}>
            {title}
         </p>
         <p className={styles.location}>
         <ImLocation2/>
            {whereprofile}
         
         </p>
         <span>{sp(price)}تومان</span>
         <Link href={`/buy-residential/${_id}`}>مشاهده اگهی <AiFillCaretLeft/></Link>
        </div>
    );
};

export default Cardprofile;