import React from "react";
import { type Category } from "../../category-card/types/types.ts";

export type SwiperProps = {
	slidesPerView?: number;
	spaceBetween?: number;
	loop?: boolean;
	swiperBreakpoints?: Record<number, Record<string, number>>;
	title: string;
	slideComponents: React.FC<Category>;
	slideData: Category[];
};
