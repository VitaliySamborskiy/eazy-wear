import styles from "./OptDrop.module.scss";

const OptCard = () => {
	return (
		<div className={styles.optContainer}>
			<ul className={styles.dropList}>
				<li className={styles.dropText}>
					<div>
						<h3 className={styles.dropTitle}>Оптові закупівлі від EazyWear</h3>
						<p>Доступні ціни і стильний асортимент</p>
					</div>
					<button type="button" className={styles.dropBtn}>Більше</button>
				</li>
				<li>
					<picture>
						<img
							src="./images/opt-wear-1x.webp"
							alt="вішаки з одягом"
						/>
					</picture>
				</li>
			</ul>
		</div>
	);
};

export { OptCard };
