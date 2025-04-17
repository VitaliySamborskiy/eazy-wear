import { ProductList } from "../../components/components";
import styles from "./main-page.module.scss";
const MainPage = () => {
	return(
		<main className="main__container">
			<div className={styles.page}>
				
		<ProductList/>
			</div>
		
		</main>
	)
}

export { MainPage };