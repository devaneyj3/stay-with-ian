"use client";
import React, { useEffect, useState } from "react";

import DUMMY_DATA from "../../../data/dummy_data";
import styles from "./HomeTypeNav.module.scss";

export default function HomeTypeNave() {
	const [iconIsClicked, setIconIsClicked] = useState(null);

	const [tags, setTags] = useState([]);

	useEffect(() => {
		//make sure tag array is unique by converting it to set that converting it back to array
		const tags = DUMMY_DATA.map((item) => item.tag);

		const uniqueTags = new Set(tags);

		const tagArr = Array.from(uniqueTags);

		setTags(tagArr);
	}, []);

	return (
		<div className={styles.container}>
			{tags.map((tag, index) => {
				return (
					<div key={tag} onClick={() => setIconIsClicked(index)}>
						<h2 className={iconIsClicked == index ? styles.active : styles.tag}>
							{tag}
						</h2>
					</div>
				);
			})}
		</div>
	);
}
