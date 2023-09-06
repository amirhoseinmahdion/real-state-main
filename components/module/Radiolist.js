import styles from "./Radiolist.module.css";

const Radiolist = ({ profiledata, setProfiledata }) => {
  const { categoriy } = profiledata;
  const chnagehamdler = (e) => {
    const { name, value } = e.target;
    setProfiledata({ ...profiledata, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="vilaa">ویلا</label>
          <input
            id="vilaa"
            type="radio"
            name="categoriy"
            value="vilaa"
            onChange={chnagehamdler}
            checked={categoriy === "vilaa"}
          />
        </div>
        <div>
          <label htmlFor="apartmen">اپارتمان</label>
          <input
            id="apartmen"
            type="radio"
            name="categoriy"
            value="apartmen"
            onChange={chnagehamdler}
            checked={categoriy === "apartmen"}
          />
        </div>
        <div>
          <label htmlFor="shop">مغازه</label>
          <input
            id="shop"
            type="radio"
            name="categoriy"
            value="shop"
            onChange={chnagehamdler}
            checked={categoriy === "shop"}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            id="office"
            type="radio"
            name="categoriy"
            value="office"
            onChange={chnagehamdler}
            checked={categoriy === "office"}
          />
        </div>
      </div>
    </div>
  );
};

export default Radiolist;
