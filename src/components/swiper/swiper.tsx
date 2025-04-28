import React, { useRef } from "react";

import { useTranslation } from "react-i18next";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconElement } from "../components.tsx";

import { type SwiperProps } from "./types/types.ts";
import { type Icon } from "../icons/type/types.ts";

import "swiper/scss";
import styles from "./swiper.module.scss";

const SWIPER_SETTINGS = {
	swiperBreakpoints: {
		320: {
			slidesPerView: 3.3,
			spaceBetween: 18,
		},
		576: {
			slidesPerView: 2.7,
		},
		768: {
			slidesPerView: 3.2,
		},
		1141: {
			slidesPerView: 3,
		},
		1440: {
			slidesPerView: 3.05,
		},
	},
	spaceBetween: 20,
	loop: true,
};

const SwiperSection: React.FC<SwiperProps> = components => {
	const { t } = useTranslation();
	const refNext = useRef<HTMLButtonElement | null>(null);
	const refPrev = useRef<HTMLButtonElement | null>(null);

	const IconArrowBase: Icon = {
		name: "arrow",
		width: 24,
		height: 24,
		color: "transparent",
	};

	const IconArrowLeft: Icon = {
		style: styles.arrowLeft,
		...IconArrowBase,
	};

	const IconArrowRight: Icon = {
		style: styles.arrowRight,
		...IconArrowBase,
	};

	return (
		<section className="swiper__container">
			<div className={styles.content}>
				<div className={styles.textContent}>
					<h2 className={styles.title}>{t(components.title)}</h2>
					<div className={styles.navigate}>
						<button ref={refPrev}>
							<IconElement {...IconArrowLeft} />
						</button>
						<button ref={refNext}>
							<IconElement {...IconArrowRight} />
						</button>
					</div>
				</div>
				<Swiper
					className={styles.swiper}
					modules={[Navigation]}
					breakpoints={SWIPER_SETTINGS.swiperBreakpoints}
					slidesPerView={components.slidesPerView}
					spaceBetween={SWIPER_SETTINGS.spaceBetween}
					loop={SWIPER_SETTINGS.loop}
					onSwiper={swiper => {
						setTimeout(() => {
							if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
								swiper.params.navigation.prevEl = refPrev.current;
								swiper.params.navigation.nextEl = refNext.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}
						}, 0);
					}}>
					{components.renderFunction()}
				</Swiper>
			</div>
		</section>
	);
};

export { SwiperSection };
