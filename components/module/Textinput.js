"use cilent";

import { p2e } from "@/utils/Replacenumber";
import styles from "./textinput.module.css";

const Textinput = ({
  title,
  name,
  profiledata,
  setProfiledata,
  textarea = false,
}) => {
  const chnagehandler = (e) => {
    const {name , value} = e.target
    setProfiledata({...profiledata ,[name]:p2e(value)})
  }
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="Text"
          name={name}
          value={profiledata[name]}
          onChange={chnagehandler}
        />
      ) : (
        <input
          type="Text"
          name={name}
          value={profiledata[name]}
          onChange={chnagehandler}
        />
      )}
    </div>
  );
};

export default Textinput;
