
import styles from "@/layout/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3> سامانه خرید و اجاره ملک</h3>
      </div>
      <p>
        سلام من امیرحسین مهدیون هستم که این سایت را به عنوان یه کار تمرینی
        انجام دادم قصد تست کردن ان را برای دیگران دارم 
      </p>
    </footer>
  );
};

export default Footer;
