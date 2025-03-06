"use client";
import React, { useState } from "react";
import Image from "next/image";
import DUMMY_DATA from "../../../data/dummy_data";
import styles from "./Listing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default function Listing() {
	const [favoritPropertyIds, setFavoritePropertyIds] = useState(new Set());

	const heartIconClicked = (id) => {
		setFavoritePropertyIds((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};

	return (
		<div className={styles.listings}>
			{DUMMY_DATA.map((loc) => {
				const {
					id,
					title,
					description,
					pricePerNight,
					rating,
					location,
					images,
					amenities,
					host,
				} = loc;
				const mainImage = images[0];

				return (
					<div key={id} className={styles.listing}>
						<div>
							<div className={styles.img_wrapper}>
								<FontAwesomeIcon
									onClick={() => heartIconClicked(id)}
									className={styles.heart}
									// Use .has(id) to determine which heart to show
									icon={favoritPropertyIds.has(id) ? fasHeart : farHeart}
								/>
								<Image src={mainImage} alt={title} fill />
							</div>
							<div>
								<div className={styles.location_container}>
									<div>
										<p className={styles.bold}>{location}</p>
									</div>
									<div className={styles.rating}>
										<div>
											<FontAwesomeIcon className={styles.icon} icon={faStar} />
										</div>
										<div>
											<p>{rating}</p>
										</div>
									</div>
								</div>
								<p className={styles.bold}>${pricePerNight} night</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
