import mongoose from 'mongoose';

export const buildCountryModel = (
	countryCode,
	code,
	nameCurrency,
	symbol,
	name,
	nativeName,
	native,
	iso639_1,
	hourDifference,
	latlng,
	distanceToBsAs
) => {
	const countryModel = {
		ISOcode: countryCode,
		currency: {
			code,
			nameCurrency,
			symbol,
		},
		country: {
			name,
			native: nativeName,
		},
		languages: [
			{
				nativeName: native,
				iso639_1,
			},
		],
		hourDifference,
		coordinates: {
			latitude: latlng[0],
			longitude: latlng[1],
			distanceToBsAs,
		},
	};

	return countryModel;
};

//Connect to Atlas

// mongoose.connect(
// 	'mongodb+srv://url_shorter:gJMK5Xfq3w233yBj@cluster0.vmdor.mongodb.net/UrlShortener?retryWrites=true&w=majority',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useFindAndModify: false,
// 	}
// );
