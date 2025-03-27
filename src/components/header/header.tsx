import React, { useState } from "react";
import { BurgerMenu, IconElement } from "../components.tsx";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppRouter } from "../../enums/app-router.enum.ts";

import { type Icon } from "../icons/type/types.ts";

import styles from "./header.module.scss";
import { LOCALS } from "../../i18n/constants/local.ts";

const Header: React.FC = () => {
	const [productCount, setProductCount] = useState<number>(0);
	const [inputActive, setInputActive] = useState<boolean>(false);
	const [activeBurger, setActiveBurger] = useState<boolean>(false);
	const { t, i18n } = useTranslation();

	const handleActiveInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputActive(!!event.target.value.trim());
	};

	// const counts = () => setProductCount(2);

	const iconBasket: Icon = {
		name: "basket",
		style: styles.svgBasket,
		color: "#383838",
		height: 36,
		width: 36,
	};

	const iconSearch: Icon = {
		name: "search",
		style: styles.svgSearch,
		color: "transparent",
		height: 36,
		width: 36,
	};

	return (
		<header className={styles.content}>
			<p className={styles.actionText}>{t("header.promo")}</p>
			<div className="header__container">
				<div className={styles.mainContent}>
					<Link
						className={styles.logo}
						to={AppRouter.MAINPAGE}>
						EazyWear
					</Link>
					<div className={styles.mainContentCenter}>
						<div className={styles.switchLanguage}>
							<button
								className={styles.switchButton}
								onClick={() => i18n.changeLanguage(LOCALS.UK)}>
								UA
							</button>
							<button
								className={styles.switchButton}
								onClick={() => i18n.changeLanguage(LOCALS.EN)}>
								EN
							</button>
						</div>
						<form className={styles.searchForm}>
							<button className={styles.searchButton}>
								<IconElement {...iconSearch} />
							</button>
							<label
								className={`${styles.searchLabel} ${inputActive ? styles.searchLabelActive : ""}`}
								htmlFor="searchInput">
								{t("header.search")}
							</label>
							<input
								className={styles.searchInput}
								name="search"
								type="search"
								id="searchInput"
								onChange={e => handleActiveInput(e)}
								onFocus={() => setInputActive(true)}
								onBlur={e => handleActiveInput(e)}
							/>
						</form>
						<button className={styles.basket}>
							<IconElement {...iconBasket} />
							<span className={styles.basketCount}>{productCount}</span>
						</button>
					</div>
					<button className={styles.registration}>{t("header.registration")}</button>
					<button
						className={`${styles.burgerButton} ${activeBurger ? styles.burgerButtonActive : ""}`}
						onClick={() => setActiveBurger(true)}>
						{Array.from({ length: 3 }).map((_, index) => (
							<span
								key={index}
								className={styles.burgerItem}></span>
						))}
					</button>
					<BurgerMenu
						activeStatus={activeBurger}
						setStatus={setActiveBurger}
					/>
				</div>
				<nav className={styles.navigate}>
					<ul className={styles.linkItems}>
						<li className={styles.linkItem}>
							<Link
								className={styles.link}
								to={AppRouter.MAINPAGE}>
								{t("header.catalog")}
							</Link>
						</li>
						<li className={styles.linkItem}>
							<Link
								className={styles.link}
								to={AppRouter.MAINPAGE}>
								{t("header.specialOffers")}
							</Link>
						</li>
						<li className={styles.linkItem}>
							<Link
								className={styles.link}
								to={AppRouter.MAINPAGE}>
								{t("header.popularProducts")}
							</Link>
						</li>
						<li className={styles.linkItem}>
							<Link
								className={styles.link}
								to={AppRouter.MAINPAGE}>
								{t("header.sales")}
							</Link>
						</li>
						<li className={styles.linkItem}>
							<Link
								className={styles.link}
								to={AppRouter.MAINPAGE}>
								{t("header.dropship")}
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export { Header };
