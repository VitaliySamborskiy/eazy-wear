import { CategoryCard, SwiperSection } from "../../components/components.tsx";
import { type SwiperProps } from "../../components/swiper/types/types.ts";

const MainPage = () => {
	const components: SwiperProps = {
		title: `slider.title`,
		slideComponents: CategoryCard,
		slideData: [
			{
				title: `slider.slide`,
				src: "slider.slide",
			},
			{
				title: `slider.slide`,
				src: "slider.slide",
			},
			{
				title: `slider.slide`,
				src: "slider.slide",
			},
			{
				title: `slider.slide`,
				src: "slider.slide",
			},
		],
	};

	return (
		<>
			<SwiperSection {...components} />
		</>
	);
};

export { MainPage };
