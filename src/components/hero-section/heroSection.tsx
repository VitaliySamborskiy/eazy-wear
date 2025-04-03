import styles from "./heroSection.module.scss";
import heroImage from "../../assets/images/ymen.png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <picture className={styles.background}>
        <img src={heroImage} alt="Hoodie" />
      </picture>

      <div className={styles.content}>
        <h1>YOUR STYLE, YOUR FREEDOM</h1>
        <p>
          Online - men's clothing store <strong>EAZEWEAR</strong>, always happy to welcome new customers!
        </p>
        <button className={styles.button}>Details</button>
      </div>

      <span className={styles.bgText}>EAZYWEAR</span>
    </section>
  );
};

export { HeroSection };
