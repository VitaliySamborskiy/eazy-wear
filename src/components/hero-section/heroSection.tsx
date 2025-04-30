import styles from "./heroSection.module.scss";
import heroImage from "../../assets/images/ymen.png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <picture className={styles.background}>
        <img src={heroImage} alt="Hoodie" />
      </picture>

      <div className={styles.content}>
        <h1>Ваш стиль, ваша свобода</h1>
        <p>
        Інтернет - магазин чоловічого одягу <strong>EAZEWEAR</strong>, завжди радий вітати нових клієнтів!
        </p>
      </div>

      <span className={styles.bgText}>EAZYWEAR</span>
    </section>
  );
};

export { HeroSection };
