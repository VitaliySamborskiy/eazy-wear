import React, { useEffect, useState } from "react";
import { ProductCard } from "../product-card/product-card";
import styles from "./product-list.module.scss";

interface Product {
	id: number;
	title: string;
	price: number;
	originalPrice?: number;
	imageUrl: string;
}

const ProductList: React.FC = () => {
	const products: Product[] = [
		{
			id: 1,
			title: "Товар 1",
			price: 100,
			imageUrl: "https://via.placeholder.com/300x300?text=Product+1",
		},
		{
			id: 2,
			title: "Товар 2",
			price: 500,
			originalPrice: 800,
			imageUrl: "https://via.placeholder.com/300x300?text=Product+2",
		},
		{
			id: 3,
			title: "Товар 3",
			price: 150,
			imageUrl: "https://via.placeholder.com/300x300?text=Product+3",
		},
		{
			id: 4,
			title: "Товар 4",
			price: 150,
			imageUrl: "https://via.placeholder.com/300x300?text=Product+4",
		},
		{
			id: 5,
			title: "Товар 5",
			price: 150,
			imageUrl: "https://via.placeholder.com/300x300?text=Product+5",
		},
		{
			id: 6,
			title: "Товар 6",
			price: 150,
			imageUrl: "https://via.placeholder.com/300x300?text=Product+6",
		},
	];

	const [startIndex, setStartIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	const handleAddToCart = (productId: number) => {
		console.log(`Товар з ID ${productId} доданий у кошик`);
	};

	const updateItemsPerPage = () => {
		const width = window.innerWidth;
		if (width < 600) {
			setItemsPerPage(1);
		} else if (width < 900) {
			setItemsPerPage(2);
		} else {
			setItemsPerPage(3);
		}
	};

	useEffect(() => {
		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);
		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const handleArrowClick = (direction: "prev" | "next") => {
		const maxIndex = products.length - itemsPerPage;
		setStartIndex(prev => {
			if (direction === "prev") {
				return Math.max(prev - itemsPerPage, 0);
			} else {
				return Math.min(prev + itemsPerPage, maxIndex);
			}
		});
	};

	const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

	return (
		<section className={styles.container}>
			<div className={styles.topline}>
				<h3>Популярні товари</h3>
				<div>
					<button onClick={() => handleArrowClick("prev")}>←</button>
					<button onClick={() => handleArrowClick("next")}>→</button>
				</div>
			</div>

			<ul className={styles.list}>
				{visibleProducts.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						originalPrice={product.originalPrice}
						imageUrl={product.imageUrl}
						onAddToCart={handleAddToCart}
					/>
				))}
			</ul>
		</section>
	);
};

export { ProductList };
