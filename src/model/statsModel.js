import mongoose from 'mongoose';

const statsModel = new mongoose.Schema({
	ISOcode: {
		type: String,
		unique: true,
	},
	country: {
		type: String,
	},
	distanceToBsAs: {
		type: String,
	},
	invocations: {
		type: Number,
	},
});

export default mongoose.model('Stat', statsModel);
