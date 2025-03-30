import React, { useRef } from "react";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconElement } from "../components.tsx";

import { type SwiperProps } from "./types/types.ts";
import { type Icon } from "../icons/type/types.ts";

import "swiper/scss";
import styles from "./swiper.module.scss";

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
				slidesPerView={3}
				spaceBetween={50}
				loop={true}
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
				{components.slideData.map((item, index) => (
					<SwiperSlide key={index}>
						<components.slideComponents {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export { SwiperSection };
