import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AppRouter } from "../../enums/app-router.enum.ts";

import { IconElement } from "../components.tsx";

import { LinkFooter } from "./types/types.ts";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
	const { t } = useTranslation();
	const baseIconParameters: Record<string, string | number> = {
		width: 32,
		height: 32,
	};
	const socialMedia: string[] = ["telegram", "facebook", "instagram"];
	const links: LinkFooter[] = [
		{ router: AppRouter.MAINPAGE, text: "footer.contacts" },
		{ router: AppRouter.MAINPAGE, text: "footer.about" },
		{ router: AppRouter.MAINPAGE, text: "footer.delivery" },
	];

	return (
		<footer className={styles.footer}>
			<div className="footer__container">
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
						<h3>{t("footer.social")}</h3>
						<nav aria-label={t("footer.aria.social")}>
							{socialMedia.map(social => (
								<a
									key={social}
									href="#"
									className={styles.socialLink}>
									<IconElement {...{ name: social, ...baseIconParameters }} />
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
