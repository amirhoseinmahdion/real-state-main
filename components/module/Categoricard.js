import Image from "next/image";
import styles from "./Categoricard.module.css"
import Link from "next/link";

const Categoricard = ({name,title}) => {
    return (
        <div className={styles.card}>
        <Link href={`/buy-residential?categoriy=${name}`}>
            <Image src={`/images/${name}.png`} alt={title} width={240} height={144} priority={true}/>
            <p>{title}</p>
        </Link>
        </div>
    );
};

export default Categoricard;
