import Admincard from "@/module/Admincard";
import styles from "./adminpage.module.css"

const Adminpage = ({profiles}) => {
  
  

   
    return (
        <div>
          
           {profiles.length ? null : <p className={styles.text}>هیچ اگهی برای انتشار وجود ندارد</p>}
            {profiles.map((profile) => (<Admincard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>))}
                  </div>
    );
};

export default Adminpage;