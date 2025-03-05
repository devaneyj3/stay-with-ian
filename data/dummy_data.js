import bedroom from "../public/images/bedroom.webp";
import dinning_room from "../public/images/dinning_room.webp";
import evening_ambiance from "../public/images/evening_ambiance.webp";
import interior from "../public/images/interior.webp";
import rustic_farmhouse from "../public/images/rustic_farmhouse.webp";
import suburban from "../public/images/suburban.webp";
import carlos from "../public/images/carlos.webp";
import bob from "../public/images/bob.webp";
import alice from "../public/images/alice.webp";
const DUMMY_DATA = [
	{
		id: 1,
		title: "Cozy Cottage in the Woods",
		description:
			"Enjoy a relaxing getaway in a secluded, cozy cottage surrounded by nature.",
		pricePerNight: 120,
		rating: 4.8,
		reviewCount: 42,
		location: "Portland, OR",
		images: [bedroom, rustic_farmhouse],
		amenities: ["Wi-Fi", "Kitchen", "Free Parking", "Fireplace"],
		host: {
			id: 101,
			name: "Alice",
			avatar: alice,
		},
	},
	{
		id: 2,
		title: "Modern Apartment Downtown",
		description:
			"A stylish apartment in the heart of the city with modern amenities and a stunning view.",
		pricePerNight: 200,
		rating: 4.5,
		reviewCount: 87,
		location: "New York, NY",
		images: [suburban, interior],
		amenities: ["Wi-Fi", "Air Conditioning", "Gym", "Elevator"],
		host: {
			id: 102,
			name: "Bob",
			avatar: bob,
		},
	},
	{
		id: 3,
		title: "Beachside Bungalow",
		description:
			"Wake up to the sound of the waves in this charming bungalow right on the beach.",
		pricePerNight: 180,
		rating: 4.7,
		reviewCount: 65,
		location: "Miami, FL",
		images: [dinning_room, evening_ambiance],
		amenities: ["Wi-Fi", "Kitchen", "Ocean View", "Parking"],
		host: {
			id: 103,
			name: "Carlos",
			avatar: carlos,
		},
	},
];

export default DUMMY_DATA;
