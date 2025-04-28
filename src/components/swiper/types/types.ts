import React from "react";
import { type Category } from "../../category-card/types/types.ts";

type SwiperSection = "category" | "popular" | "reviews";

type SwiperProps = {
	slidesPerView?: number;
	spaceBetween?: number;
	loop?: boolean;
	swiperBreakpoints?: Record<number, Record<string, number>>;
	swiperSupportStyles?: SwiperSection;
	title: string;
	slideComponents: React.FC<Category>;
	slideData?: Category[];
	renderFunction: () => React.ReactNode;
};

export type { SwiperProps };
