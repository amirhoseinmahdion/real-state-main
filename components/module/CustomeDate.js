import styles from "./CustomeDate.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const CustomeDate = ({ profiledata, setProfiledata }) => {
  const { constructionDate } = profiledata;
  const chnagepicker = (e) => {
    const date = new Date(e)
    setProfiledata({...profiledata , constructionDate:date})
  }
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={constructionDate}
        onChange={chnagepicker}
      />
    </div>
  );
};

export default CustomeDate;
