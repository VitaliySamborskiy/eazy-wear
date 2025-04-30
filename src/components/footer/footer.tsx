import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";

import { IconElement } from "../components.tsx";

import { LinkFooter } from "./types/types.ts";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
	const { t } = useTranslation();
	const socialMedia: string[] = ["telegram", "facebook", "instagram"];
	const links: LinkFooter[] = [
		{ router: AppRouter.MAINPAGE, text: "footer.contacts" },
		{ router: AppRouter.MAINPAGE, text: "footer.about" },
		{ router: AppRouter.MAINPAGE, text: "footer.delivery" },
	];

	return (
		<footer className="footer__container">
			<div className={styles.newsSection}>
				<div className={styles.newsText}>
					<h2>{t("footer.news.title")}</h2>
					<p>{t("footer.news.description")}</p>
				</div>
				<form
					className={styles.form}
					name="numbersSubscribeForm">
					<input
						id="numbersSubscribe"
						name="numbersSubscribe"
						type="tel"
						placeholder="+38 (_ _ _) _ _ _"
					/>
					<button>{t("footer.news.button")}</button>
				</form>
			</div>
			<div className={styles.content}>
				<div className={styles.logoBlock}>
					<Link
						to={AppRouter.MAINPAGE}
						className={styles.logo}>
						EAZYWEAR
					</Link>
					<p>{t("footer.slogan")}</p>
				</div>

				<div className={styles.info}>
					<h3 className={styles.subTitle}>{t("footer.info")}</h3>
					<nav aria-label={t("footer.aria.menu")}>
						{links.map(item => (
							<Link
								key={`Link` + item.router}
								to={item.router}
								className={styles.link}>
								{t(item.text)}
							</Link>
						))}
					</nav>
				</div>

				<div className={styles.social}>
					<h3 className={styles.subTitle}>{t("footer.social")}</h3>
					<nav aria-label={t("footer.aria.social")}>
						{socialMedia.map(social => (
							<a
								key={social}
								href="#">
								<IconElement {...{ name: social, style: styles.socialLinks }} />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
