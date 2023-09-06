import { useState } from "react";
import styles from "./Textlist.module.css";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Textlist = ({ profiledata, setProfiledata, title, name }) => {
  const [show, setShow] = useState("false");
  const clickhandler = () => {
    setShow("true");
    setProfiledata({ ...profiledata, [name]: [...profiledata[name], ""] });
  };
  const chnagehandler = (e, index) => {
    const { value } = e.target;
    const list = [...profiledata[name]];
    list[index] = value;
    setProfiledata({ ...profiledata, [name]: list });
  };

  const deletehandler = (index) => {
    const data = [...profiledata[name]];
    data.splice(index , 1) 

    setProfiledata({
      ...profiledata,
      [name]:data
    });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>

      {show
        ? profiledata[name].map((item, index) => (
            <div key={index} className={styles.card}>
              <input
                value={item}
                type="Text"
                onChange={(e) => chnagehandler(e, index)}
              />
              <button onClick={() => deletehandler(index)}>
                حذف
                <AiFillDelete />
              </button>
            </div>
          ))
        : null}
      <button onClick={clickhandler}>
        افزودن
        <BsFileEarmarkPlusFill />
      </button>
    </div>
  );
};

export default Textlist;
