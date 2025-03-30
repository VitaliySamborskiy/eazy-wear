import React from "react";
import { CategoryCard } from "../../category-card/types/types.ts";

export type SwiperProps = {
	title: string;
	slideComponents: React.FC<CategoryCard>;
	slideData: CategoryCard[];
};
