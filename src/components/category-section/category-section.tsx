import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./category-section.module.scss";

type Category = {
	id: number;
	name: string;
	img: string;
	link: string;
};

const categories: Category[] = [
	{
		id: 1,
		name: "Футболки",
		img: "https://via.placeholder.com/150?text=T-shirts",
		link: "/catalog/t-shirts",
	},
	{
		id: 2,
		name: "Штани",
		img: "https://via.placeholder.com/150?text=Jeans",
		link: "/catalog/jeans",
	},
	{
		id: 3,
		name: "Куртки",
		img: "https://via.placeholder.com/150?text=Jackets",
		link: "/catalog/jackets",
	},
	{
		id: 4,
		name: "Худі",
		img: "https://via.placeholder.com/150?text=Hoodies",
		link: "/catalog/hoodies",
	},
	{
		id: 5,
		name: "Спортивні костюми",
		img: "https://via.placeholder.com/150?text=Sport+Suit",
		link: "/catalog/sport-suits",
	},
	{
		id: 6,
		name: "Шорти",
		img: "https://via.placeholder.com/150?text=Shorts",
		link: "/catalog/shorts",
	},
];

const CategorySection: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const visibleCount = 3;

	const handleScrollLeft = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? categories.length - visibleCount : prevIndex - 1
		);
	};

	const handleScrollRight = () => {
		setCurrentIndex(prevIndex =>
			prevIndex + visibleCount >= categories.length ? 0 : prevIndex + 1
		);
	};

	return (
		<section className={styles.container}>
			<div className={styles.topline}>
				<h3>Категорії товарів</h3>
				<div className={styles.scrollButtons}>
					{}
					<button onClick={handleScrollLeft}>←</button>

					{}
					<button onClick={handleScrollRight}>→</button>
				</div>
			</div>

			<div className={styles.carouselContainer}>
				<ul className={styles.list}>
					{categories.slice(currentIndex, currentIndex + visibleCount).map(category => (
						<li
							key={category.id}
							className={styles.card}>
							<Link to={category.link}>
								<img
									src={category.img}
									alt={category.name}
									className={styles.image}
								/>
								<p className={styles.title}>{category.name}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export { CategorySection };
