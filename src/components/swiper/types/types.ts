// import React from "react";
// import { type Category } from "../../category-card/types/types.ts";

// type SwiperSection = "category" | "popular" | "reviews";

// type SwiperProps = {
// 	slidesPerView?: number;
// 	spaceBetween?: number;
// 	loop?: boolean;
// 	swiperBreakpoints?: Record<number, Record<string, number>>;
// 	swiperSupportStyles?: SwiperSection;
// 	title: string;
// 	slideComponents: React.FC<Category>;
// 	slideData: Category[];
// };

// export type { SwiperProps };
// types.ts
import type { SwiperOptions } from "swiper/types";

export interface SwiperProps<T = any> {
	title: string;
	loop?: boolean;
	spaceBetween?: number;
	swiperBreakpoints?: SwiperOptions["breakpoints"];
	slideComponents: React.FC<T>;
	slideData: T[];
}
