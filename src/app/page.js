import Image from "next/image";
import DUMMY_DATA from "../../data/dummy_data";
export default function Home() {
	return (
		<div>
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

				return (
					<div key={id}>
						{images.map((img, index) => (
							<Image
								key={index}
								src={img}
								alt={title}
								width={100}
								height={100}
							/>
						))}
						<p>{title}</p>
						<p>{description}</p>
						<p>{pricePerNight}</p>
						<p>{rating}</p>
						{amenities.map((feature) => (
							<li key={feature}>{feature}</li>
						))}
						<p>{location}</p>
						<p>Your Host</p>
						<p>{name}</p>
						<p>{avatar}</p>
						<p>Your Host</p>
					</div>
				);
			})}
		</div>
	);
}
