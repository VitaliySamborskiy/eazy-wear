import { AboutUs, CategoryCard, DropSection, SwiperSection } from "../../components/components.tsx";
import { type SwiperProps } from "../../components/swiper/types/types.ts";
import { type Category } from "../../components/category-card/types/types.ts";

const MainPage = () => {
	const components: SwiperProps<Category> = {
		swiperBreakpoints: {
			320: {
				slidesPerView: 3.3,
				spaceBetween: 18,
			},
			576: {
				slidesPerView: 2.7,
			},
			768: {
				slidesPerView: 3.2,
			},
			1141: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 3.05,
			},
		},
		spaceBetween: 20,
		loop: true,
		swiperSupportStyles: "category",
		title: `slider.title`,
		slideComponents: CategoryCard,
		slideData: [
			{
				title: "jacket",
				src: "./src/assets/img/jacket.jpg",
			},
			{
				title: `scarves`,
				src: "./src/assets/img/scarves.jpg",
			},
			{
				title: `hoodie`,
				src: "./src/assets/img/hoodie.jpg",
			},
			{
				title: `shorts`,
				src: "./src/assets/img/shorts.jpg",
			},
			{
				title: `slacks`,
				src: "./src/assets/img/slacks.jpg",
			},
			{
				title: `sportswear`,
				src: "./src/assets/img/sportswear.jpg",
			},
			{
				title: `t-shirts`,
				src: "./src/assets/img/t-shirts.jpg",
			},
		],
	};

	return (
		<>
			<AboutUs />
			<SwiperSection {...components} />
			<DropSection />
		</>
	);
};

export { MainPage };
