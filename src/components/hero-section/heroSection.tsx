import React from "react";
import styles from "./heroSection.module.scss";
import heroImage from  "../../assets/images/ymen.png";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* background img */}
      <div className={styles.background}>
        <img src={heroImage} alt="Hoodie" />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1>YOUR STYLE, <br /> YOUR FREEDOM</h1>
        <p>
          Online - men's clothing store <strong>EAZEWEAR</strong>, always happy to welcome new customers!
        </p>
        <button className={styles.button}>Details</button>
      </div>

      {/* Text on the background */}
      <h1 className={styles.bgText}>EAZYWEAR</h1>
    </section>
  );
};
