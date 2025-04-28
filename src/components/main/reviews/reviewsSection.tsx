import { SwiperSlide } from "swiper/react";
import Container from "../../common/container";
import { CategoryCard, SwiperSection } from "../../components";
import { SwiperProps } from "../../swiper/types/types";
import mockReviews from "../../../mock-data/review-mock.ts";
import ReviewCard from "./reviewCard.tsx";

// type ReviewsSectionProps = {};

const components: SwiperProps = {
	title: `main.reviews.title`,
	slideComponents: CategoryCard,
	renderFunction: () => {
		return mockReviews.map((item, index) => (
			<SwiperSlide key={index}>
				<ReviewCard {...item} />
			</SwiperSlide>
		));
	},
};

function ReviewsSection() {
	return (
		<Container>
			<SwiperSection {...components} />
		</Container>
	);
}

export default ReviewsSection;
