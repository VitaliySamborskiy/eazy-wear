import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";

import { IconElement } from "../components.tsx";

import { type Icon } from "../icons/type/types.ts";
import { type CustomerBenefit } from "./types/types.ts";

import styles from "./about-us.module.scss";

const AboutUs: React.FC = () => {
	//  hello from DV
	const { t } = useTranslation();
	const iconBase: Record<string, string | number> = {
		width: 24,
		height: 24,
		color: "transparent",
	};

	const iconArrow: Icon = {
		name: "arrow-tail",
		style: styles.svg,
		...iconBase,
	};

	const dataCustomerBenefit: CustomerBenefit[] = [
		{
			svg: "lorry",
			title: "deliveryTitle",
			description: "deliveryText",
		},
		{
			svg: "clock",
			title: "sendingTitle",
			description: "sendingText",
		},
		{
			svg: "bag",
			title: "cashbackTitle",
			description: "cashbackText",
		},
	];

	return (
		<section className="about-us__container">
			<div className={styles.benefits}>
				{dataCustomerBenefit.map((item, index) => (
					<article key={item.title + index}>
						<IconElement
							{...{
								name: item.svg,
								...iconBase,
							}}></IconElement>
						<div className={styles.descriptionBlock}>
							<h3>{t(item.title, { ns: "about-us" })}</h3>
							<p>{t(item.description, { ns: "about-us" })}</p>
						</div>
					</article>
				))}
			</div>
			<div className={styles.content}>
				<h2>{t(`title`, { ns: "about-us" })}</h2>
				<div className={styles.textBlock}>
					<p>{t("text", { ns: "about-us" })}</p>
					<Link
						to={AppRouter.MAINPAGE}
						className={styles.link}>
						<span className={styles.linkText}>{t(`link`, { ns: "about-us" })}</span>
						<IconElement {...iconArrow}></IconElement>
					</Link>
				</div>
			</div>
		</section>
	);
};

export { AboutUs };
