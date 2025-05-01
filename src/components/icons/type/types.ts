type IconNames =
	| "telegram"
	| "facebook"
	| "instagram"
	| "heart"
	| "basket"
	| "search"
	| "cross"
	| "registration"
	| "productSearch"
	| "cart"
	| "popularProducts"
	| "dropshipping"
	| "discounts";

export type Icon = {
	style?: string;
	name: IconNames;
	width?: number;
	height?: number;
	color?: string;
};
