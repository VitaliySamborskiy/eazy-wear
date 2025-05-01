import styles from "./OptDrop.module.scss";

const DropCard = () => {
	return (
  <div className={styles.optContainer}>
    <ul className={styles.dropList}>
        <li className={styles.dropSectionImg}>
          <picture>
            <img src="./images/drop-wear-1x.webp" alt="вішаки з одягом" />
          </picture>
        </li>
        <li className={styles.dropText}>
          <div>
            <h3 className={styles.dropTitle}>Дропшиппінг <br/>
            з EazyWear</h3>
            <p>Купуйте без великих вкладень і ризиків.</p>
          </div>
          <button type="button" className={styles.dropBtn}>Більше</button>
        </li>
    </ul>
    <button></button>
  </div>
  );
};

export { DropCard };
