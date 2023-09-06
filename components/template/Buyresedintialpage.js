import styles from "./buyresedntial.module.css";
import Cardprofile from "@/module/Cardprofile";
import Sidebarpage from "@/module/Sidebarpage";

const Buyresedintialpage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebarpage />
      </div>
      <div className={styles.main}>
        {data.map((profile) => (
          <Cardprofile key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
};

export default Buyresedintialpage;
