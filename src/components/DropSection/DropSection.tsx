import { DropCard } from "./Card/DropCard";
import { OptCard } from "./Card/OptCard";
import styles from "./DropSection.module.scss";

const DropSection = () => {
  return (
    <section className={styles.section}>
        <div className="drop__container">
            <h2 className={styles.visuallyHidden}>Опт та дропшипінг</h2>
            <div className={styles.dropContainer}>
              <DropCard />
              <OptCard />
            </div>
        </div>
    </section>
  )
}

export { DropSection };