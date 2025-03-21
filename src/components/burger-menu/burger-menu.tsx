import React from "react";

import { IconElement } from "../components.tsx";

import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";

import type { Icon } from "../icons/type/types.ts";
import type { Burger } from "./types/types.ts";

import "./burger-menu.scss";

const BurgerMenu: React.FC<Burger> = ({ activeStatus }) => {
	const iconSearch: Icon = {
		name: "search",
		style: "header__svg-search",
		color: "transparent",
		height: 16,
		width: 16,
	};

	return (
		<div
			className={`burger-menu__background ${activeStatus ? "burger-menu__background_active" : ""} `}>
			<h2 className="burger-menu__title">Меню</h2>
			<nav className="burger-menu__navigation">
				<ul className="burger-menu__list">
					<li className="burger-menu__list-item">
						<IconElement {...iconSearch} />
						<span className="burger-menu__list-text">Реєстрація</span>
					</li>
					<li className="burger-menu__list-item">
						<IconElement {...iconSearch} />
						<span className="burger-menu__list-text">Пошук товару</span>
					</li>
					<li className="burger-menu__list-item">
						<Link
							to={AppRouter.MAINPAGE}
							className="burger-menu__list-link">
							<IconElement {...iconSearch} />
							<span className="burger-menu__list-text">Корзина</span>
						</Link>
					</li>
					<li className="burger-menu__list-item">
						<Link
							to={AppRouter.MAINPAGE}
							className="burger-menu__list-link">
							<IconElement {...iconSearch} />
							<span className="burger-menu__list-text">Популярні товари</span>
						</Link>
					</li>
					<li className="burger-menu__list-item">
						<Link
							to={AppRouter.MAINPAGE}
							className="burger-menu__list-link">
							<IconElement {...iconSearch} />
							<span className="burger-menu__list-text">Дропшипінг</span>
						</Link>
					</li>
					<li className="burger-menu__list-item">
						<Link
							to={AppRouter.MAINPAGE}
							className="burger-menu__list-link">
							<IconElement {...iconSearch} />
							<span className="burger-menu__list-text">Знижки та Акції</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export { BurgerMenu };
