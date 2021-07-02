const convertToRadians = (degress) => {
	return (degress * Math.PI) / 180;
};

/*
Haversine formule:
calculate distance between two points on a sphere, in this case the Earth
*/
const haversineFormule = (lat1, lng1, lat2, lng2) => {
	const EARTH_RADIUS = 6371;

	lat1 = convertToRadians(lat1);
	lng1 = convertToRadians(lng1);

	lat2 = convertToRadians(lat2);
	lng2 = convertToRadians(lng2);

	const dLat = lat2 - lat1;
	const dLng = lng2 - lng1;

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return EARTH_RADIUS * c;
};

const ARG_COORD = {
	latitude: -34,
	longitude: -64,
};

export const getDistanceToBsAs = (latitude, longitude, roundFactor) => {
	return haversineFormule(
		ARG_COORD.latitude,
		ARG_COORD.longitude,
		latitude,
		longitude
	).toFixed(roundFactor);
};
