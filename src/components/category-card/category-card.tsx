import React from "react";

import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";
import { useTranslation } from "react-i18next";

import { type CategoryCard } from "./types/types.ts";

import styles from "./category-card.module.scss";

const CategoryCard: React.FC<CategoryCard> = cardInfo => {
	const { t } = useTranslation();

	return (
		<Link to={AppRouter.MAINPAGE}>
			<article className={styles.card}>
				<picture className={styles.imgBlock}>
					<img
						className={styles.img}
						src={cardInfo.src}
						alt={cardInfo.title}
						height="464"
						width="453"
						loading="lazy"
					/>
				</picture>
				<h3 className={styles.title}>{t(cardInfo.title)}</h3>
			</article>
		</Link>
	);
};

export { CategoryCard };
