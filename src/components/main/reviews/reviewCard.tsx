import StarRating from "../../common/StarRating";
import styles from "./review-card.module.scss";

type ReviewCardProps = {
	starRating: number;
	photoUrl: string;
	reviewText: string;
	reviewerName: string;
	dateOfPubl: number;
	title: {
		uk: string;
		en: string;
	};
};

function ReviewCard(props: ReviewCardProps) {
	return (
		<div className={styles.reviewTile}>
			<div className={styles.imageContainer}>
				<img
					src={props.photoUrl}
					alt="Jack & Jones Men's Hoodie"
				/>
			</div>
			<h2>Худі чоловіче Jack & Jones</h2>
			<div className={styles.reviewContent}>
				<StarRating
					active={false}
					defaultRating={props.starRating}
					maxRating={5}
				/>
				<div className={styles.reviewerInfo}>
					<span className={styles.reviewerName}>Олег</span>
					<span className={styles.reviewDate}>2.10.2023</span>
				</div>
				<p className={styles.reviewText}>
					Стильне та комфортне худі! Тканина м’яка, приємна до тіла, добре гріє. Якість пошиву на
					висоті.
				</p>
			</div>
		</div>
	);
}

export default ReviewCard;
