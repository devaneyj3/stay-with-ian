import Listing from "@/components/Listing/Listing";
import styles from "./home.module.scss";
import Searchbar from "@/components/Searchbar/Searchbar";
export default function Home() {
	return (
		<div className={styles.page_container}>
			<div className={styles.searchbar_container}>
				<Searchbar />
			</div>
			<hr className={styles.break} />
			<Listing />
		</div>
	);
}
