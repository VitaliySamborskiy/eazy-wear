import React, { useState } from "react";
import { BurgerMenu, IconElement } from "../components.tsx";

import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";

import type { Icon } from "../icons/type/types.ts";

import "./header.scss";

const Header: React.FC = () => {
	const [productCount, setProductCount] = useState<number>(0);
	const [inputActive, setInputActive] = useState<boolean>(false);
	const [activeBurger, setActiveBurger] = useState<boolean>(false);

	const handleActiveInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputActive(!!event.target.value.trim());
	};

	const counts = () => setProductCount(2);

	const iconBasket: Icon = {
		name: "basket",
		style: "header__svg-basket",
		color: "#383838",
		height: 36,
		width: 36,
	};

	const iconSearch: Icon = {
		name: "search",
		style: "header__svg-search",
		color: "transparent",
		height: 36,
		width: 36,
	};

	return (
		<header className="header__content">
			<p className="header__action-text">
				На промокод знижка -10% (тільки для зареєстрованих клієнтів). Кількість використань одним
				клієнтом необмежена.
			</p>
			<div className="header__container">
				<div className="header__main-content">
					<Link
						className="header__logo"
						to={AppRouter.MAINPAGE}>
						EazyWear
					</Link>
					<div className="header__main-content-center">
						<div className="header__switch-language">
							<button className="header__switch-button">UA</button>
							<button className="header__switch-button">EN</button>
						</div>
						<form className="header__search-form">
							<button className="header__search-button">
								<IconElement {...iconSearch} />
							</button>
							<label
								className={`header__search-label ${inputActive ? "header__search-label_active" : ""}`}
								htmlFor="searchInput">
								Пошук
							</label>
							<input
								className="header__search-input"
								name="search"
								type="search"
								id="searchInput"
								onChange={e => handleActiveInput(e)}
								onFocus={() => setInputActive(true)}
								onBlur={e => handleActiveInput(e)}
							/>
						</form>
						<button className="header__basket">
							<IconElement {...iconBasket} />
							<span className="header__basket-count">{productCount}</span>
						</button>
					</div>
					<button className="header__registration">Реестрація</button>
					<button
						className={`header__burger-button ${activeBurger ? "header__burger-button_active" : ""}`}
						onClick={() => setActiveBurger(!activeBurger)}>
						{Array.from({ length: 3 }).map((_, index) => (
							<span
								key={index}
								className="header__burger-items"></span>
						))}
					</button>
					<BurgerMenu activeStatus={activeBurger} />
				</div>
				<nav className="header__navigate">
					<ul className="header__link-items">
						<li className="header__link-item">
							<Link
								className="header__link"
								to={AppRouter.MAINPAGE}>
								Каталог
							</Link>
						</li>
						<li className="header__link-item">
							<Link
								className="header__link"
								to={AppRouter.MAINPAGE}>
								Про нас
							</Link>
						</li>
						<li className="header__link-item">
							<Link
								className="header__link"
								to={AppRouter.MAINPAGE}>
								Популярні товари
							</Link>
						</li>
						<li className="header__link-item">
							<Link
								className="header__link"
								to={AppRouter.MAINPAGE}>
								Доставка і оплата
							</Link>
						</li>
						<li className="header__link-item">
							<Link
								className="header__link"
								to={AppRouter.MAINPAGE}>
								Дропшипінг
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export { Header };
