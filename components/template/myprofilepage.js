
import styles from "./myprofilepage.module.css"
import Dashboardcard from "@/module/Dashboardcard";

const Myprofilepage = ({profiles}) => {
    console.log(profiles);
    return (
        <div >
             
             {!profiles.length ? <p className={styles.text}>هیچ اگهی یافت نشده است</p>:null}

             {profiles.map(profile => <Dashboardcard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>)}
            
        </div>
    );
};

export default Myprofilepage;