import React from "react";
import type { SwiperOptions } from "swiper/types";

type SwiperSectionName = "category" | "popular" | "reviews";

type SwiperProps<T> = {
	loop?: boolean;
	spaceBetween?: number;
	swiperBreakpoints?: SwiperOptions["breakpoints"];
	swiperSupportStyles?: SwiperSectionName;
	title: string;
	slideComponents: React.FC<T>;
	slideData: T[];
};

export type { SwiperProps };
