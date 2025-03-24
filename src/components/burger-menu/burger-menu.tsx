import React from "react";

import { IconElement } from "../components.tsx";

import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";

import { type Icon } from "../icons/type/types.ts";
import { type Burger } from "./types/types.ts";

import styles from "./burger-menu.module.scss";

const BurgerMenu: React.FC<Burger> = ({ activeStatus, setStatus }) => {
	const iconSearch: Icon = {
		name: "search",
		style: styles.iconSearch,
		color: "transparent",
		height: 16,
		width: 16,
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
				<h2 className={styles.title}>Меню</h2>
				<button
					className={styles.close}
					onClick={() => setStatus(false)}>
					<IconElement {...iconСross} />
				</button>
			</div>
			<nav className={styles.navigation}>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<IconElement {...iconSearch} />
						<span className={styles.listText}>Реєстрація</span>
					</li>
					<li className={styles.listItem}>
						<IconElement {...iconSearch} />
						<span className={styles.listText}>Пошук товару</span>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconSearch} />
							<span className={styles.listText}>Корзина</span>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconSearch} />
							<span className={styles.listText}>Популярні товари</span>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconSearch} />
							<span className={styles.listText}>Дропшипінг</span>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link
							to={AppRouter.MAINPAGE}
							className={styles.listLink}>
							<IconElement {...iconSearch} />
							<span className={styles.listText}>Знижки та Акції</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export { BurgerMenu };
