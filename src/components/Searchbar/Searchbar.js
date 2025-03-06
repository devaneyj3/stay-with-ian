import React from "react";

import classes from "./Searchbar.module.scss";
import SearchContent from "./SearchContent";

export default function Searchbar() {
	return (
		<section className={classes.searchbar}>
			<SearchContent
				inputId="where"
				label="Where"
				placeholder="Search destinations"
			/>
			<SearchContent
				inputId="checkIn"
				label="Check In"
				placeholder="Add dates"
			/>
			<SearchContent
				inputId="checkOut"
				label="Check Out"
				placeholder="Add dates"
			/>
			<SearchContent inputId="who" label="Who" placeholder="Add guests" />
		</section>
	);
}
