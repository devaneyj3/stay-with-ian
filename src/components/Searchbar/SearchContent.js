import React from "react";

import classes from "./Searchbar.module.scss";

export default function SearchContent({ inputId, label, placeholder }) {
	return (
		<div className={classes.contents}>
			<div className={classes.input_container}>
				<label htmlFor={inputId}>{label}</label>
				<input
					id={inputId}
					type="text"
					className={classes.search_text}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}
