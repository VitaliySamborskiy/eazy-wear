import React from "react";

import { IconElement } from "../components.tsx";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppRouter } from "../../enums/app-router.enum.ts";

import { type Icon } from "../icons/type/types.ts";
import { type Burger } from "./types/types.ts";

import styles from "./burger-menu.module.scss";

const BurgerMenu: React.FC<Burger> = ({ activeStatus, setStatus }) => {
	const { t } = useTranslation();

	const baseIconParameters: Record<string, string | number> = {
		color: "#6A6A6A",
		height: 16,
		width: 16,
	};

	const iconMenu: Record<string, Icon> = {
		registration: {
			name: "registration",
			...baseIconParameters,
		},
		productSearch: {
			name: "productSearch",
			...baseIconParameters,
		},
		cart: {
			name: "cart",
			...baseIconParameters,
		},
		popularProducts: {
			name: "popularProducts",
			...baseIconParameters,
		},
		dropshipping: {
			name: "dropshipping",
			...baseIconParameters,
		},
		discounts: {
			name: "discounts",
			...baseIconParameters,
		},
	};

	const iconСross: Icon = {
		name: "cross",
		style: styles.iconSearch,
		height: 24,
		width: 24,
	};

	return (
		<div className={`${styles.background} ${activeStatus ? styles.active : ""}`}>
			<div className={styles.header}>
				<h2 className={styles.title}>{t("burger.title")}</h2>
				<button
					className={styles.close}
					onClick={() => setStatus(false)}>
					<IconElement {...iconСross} />
				</button>
			</div>
			<nav className={styles.navigation}>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<IconElement {...iconMenu.registration} />
						<span className={styles.listText}>{t("burger.registration")}</span>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconMenu.cart} />
							<span className={styles.listText}>{t("burger.basket")}</span>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconMenu.popularProducts} />
							<span className={styles.listText}>{t("burger.popularProducts")}</span>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconMenu.dropshipping} />
							<span className={styles.listText}>{t("burger.dropshipping")}</span>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconMenu.discounts} />
							<span className={styles.listText}>{t("burger.sales")}</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export { BurgerMenu };
