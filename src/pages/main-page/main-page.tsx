import {
	AboutUs,
	CategoryCard,
	SwiperSection,
	ProductCard,
} from "../../components/components.tsx";
import { type SwiperProps } from "../../components/swiper/types/types.ts";
import type { Product } from "../../components/product-card/types/types.ts"; 

const MainPage = () => {
	const categorySwiperProps: SwiperProps = {
		swiperBreakpoints: {
			320: { slidesPerView: 3.3, spaceBetween: 18 },
			576: { slidesPerView: 2.7 },
			768: { slidesPerView: 3.2 },
			1141: { slidesPerView: 3 },
			1440: { slidesPerView: 3.05 },
		},
		spaceBetween: 20,
		loop: true,
		title: `slider.title`,
		slideComponents: CategoryCard,
		slideData: [
			{ title: "jacket", src: "./src/assets/img/jacket.jpg" },
			{ title: "scarves", src: "./src/assets/img/scarves.jpg" },
			{ title: "hoodie", src: "./src/assets/img/hoodie.jpg" },
			{ title: "shorts", src: "./src/assets/img/shorts.jpg" },
			{ title: "slacks", src: "./src/assets/img/slacks.jpg" },
			{ title: "sportswear", src: "./src/assets/img/sportswear.jpg" },
			{ title: "t-shirts", src: "./src/assets/img/t-shirts.jpg" },
		],
	};

	const handleAddToCart = (id: number) => {
		console.log(`Товар з ID ${id} доданий у кошик`);
	};

	const productSwiperProps: SwiperProps<Product> = {
		title: "Популярні товари",
		loop: true,
		spaceBetween: 20,
		slideComponents: props => (
			<ProductCard {...props} onAddToCart={handleAddToCart} />
		),
		slideData: [
			{ id: 1, title: "Товар 1", price: 100, imageUrl: "./src/assets/img/shorts.jpg" },
			{ id: 2, title: "Товар 2", price: 500, originalPrice: 800, imageUrl: "./src/assets/img/t-shirts.jpg" },
			{ id: 3, title: "Товар 3", price: 150, imageUrl: "./src/assets/img/slacks.jpg" },
			{ id: 4, title: "Товар 4", price: 150, imageUrl: "./src/assets/img/sportswear.jpg" },
			{ id: 5, title: "Товар 5", price: 150, imageUrl: "./src/assets/img/jacket.jpg"},
			{ id: 6, title: "Товар 6", price: 150, imageUrl: "./src/assets/img/scarves.jpg" },
		],
		swiperBreakpoints: {
			320: { slidesPerView: 1.2 },
			576: { slidesPerView: 1.5 },
			768: { slidesPerView: 2.5 },
			1024: { slidesPerView: 3 },
		},
	};

	return (
		<>
			<AboutUs />
			<SwiperSection {...categorySwiperProps} />
			<SwiperSection {...productSwiperProps} />
		</>
	);
};

export { MainPage };
