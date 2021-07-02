import mongoose from 'mongoose';

const countryModel = new mongoose.Schema({
	ISOcode: {
		type: String,
		unique: true,
	},
	currency: {
		code: String,
		name: String,
		symbol: String,
	},
	country: {
		name: String,
		native: String,
	},
	languages: [
		{
			nativeName: String,
			iso639_1: String,
		},
	],
	hourDifference: {
		type: String,
	},
	coordinates: {
		latitude: Number,
		longitude: Number,
		distanceToBsAs: Number,
	},
});

export default mongoose.model('Countries', countryModel);
