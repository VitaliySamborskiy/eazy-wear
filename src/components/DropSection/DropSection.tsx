import { DropCard } from "./Card/DropCard";
import { OptCard } from "./Card/OptCard";
import styles from "./DropSection.module.scss"

const DropSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className={styles.visuallyHidden}>Опт та дропшипінг</h2>
            <DropCard />
            <OptCard />
        </div>
    </section>
  )
}

export { DropSection };