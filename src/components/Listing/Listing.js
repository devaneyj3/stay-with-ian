import React from "react";
import Image from "next/image";
import DUMMY_DATA from "../../../data/dummy_data";
import styles from "./Listing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Listing() {
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
				const { id: hostId, name, avatar } = host;
				// amenities is an array of 4
				//images an array of two
				const mainImage = images[0];
				return (
					<div key={id} className={styles.listing}>
						<div>
							<div className={styles.img_wrapper}>
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
