// ProductCard.tsx
import React from "react";
import { IconElement } from "../components.tsx";
import { type Icon } from "../icons/type/types.ts";
import styles from "./product-card.module.scss";
type ProductCardProps = {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	originalPrice?: number;
	onAddToCart: (productId: number) => void;
};
const iconBasket: Icon = {
	name: "basket",
	style: styles.svgBasket,
	color: "#383838",
	height: 24,
	width: 24,
};

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	title,
	imageUrl,
	price,
	originalPrice,
	onAddToCart,
}) => {
	console.log("Цена товара:", { originalPrice, price });
	return (
		<li className={styles.card}>
			<img
				src={imageUrl}
				alt={title}
				className={styles.image}
			/>
			<p className={styles.title}>{title}</p>
			<div className={styles.pricebascet}>
				<p className={styles.price}>
					<strong>{price} $</strong>
					{originalPrice && originalPrice > price && (
						<span className={styles.originalPrice}>{originalPrice} $</span>
					)}
				</p>
				<button
					className={styles.basket}
					onClick={() => onAddToCart(id)}>
					<IconElement {...iconBasket} />
				</button>
			</div>
		</li>
	);
};

export { ProductCard };
