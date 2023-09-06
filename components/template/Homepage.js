import { FiCircle } from 'react-icons/fi';
import { BiSolidCity } from 'react-icons/bi';
import styles from "./homepage.module.css"
import Categoricard from '@/module/Categoricard';

const Homepage = () => {
    const cities = ["تهران","تبریز","قم","شیراز","همدان","اصفهان","مازندران","خوزستان"]
    return (
        <div>
        <div className={styles.banner}>
           <div className={styles.desc} >
            <h1>سامانه خرید و اجاره ملک</h1>
            <ul>
                <li> <FiCircle/><span>خرید</span></li>
                <li> <FiCircle/><span>فروش</span></li>
                <li> <FiCircle/><span>رهن</span></li>
                <li> <FiCircle/><span>اجاره</span></li>
            </ul>
           </div>
          
        </div>
        <div className={styles.categories}>
            <Categoricard name="apartmen" title="اپارتمان"/>
            <Categoricard name="office" title="محل کار"/>
            <Categoricard name="shop" title="مغازه"/>
            <Categoricard name="vilaa" title="ویلا"/>

           </div>
           <div className={styles.city}>
            <h3>شهر های پر بازدید</h3>
            <ul >
            {cities.map(city =>
                <li key={city}><span>{city}</span><BiSolidCity/></li>
           )}

</ul>
           </div>
        </div>
    );
};

export default Homepage;