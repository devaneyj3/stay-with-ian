import React from "react";

import classes from "./Searchbar.module.scss";

export default function Searchbar() {
	return (
		<section className={classes.searchbar}>
			<div className={classes.contents}>
				<input
					type="text"
					className={classes.search_text}
					placeholder="Where To?"
				/>
			</div>
		</section>
	);
}
