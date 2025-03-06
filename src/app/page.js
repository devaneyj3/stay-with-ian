import Listing from "@/components/Listing/Listing";
import styles from "./home.module.scss";
import Searchbar from "@/components/Searchbar/Searchbar";
import HomeTypeNave from "@/components/HomeTypeNav/HomeTypeNave";
export default function Home() {
	return (
		<div className={styles.page_container}>
			<div className={styles.searchbar_container}>
				<Searchbar />
			</div>
			<hr className={styles.break} />
			<section className={styles.homeTypeNav_container}>
				<HomeTypeNave />
			</section>
			<Listing />
		</div>
	);
}
