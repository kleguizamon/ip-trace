import mongoose from 'mongoose';

//Connect to local DB
export default async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/IpTrace', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.log('error al conectarse con mongo');
	}
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
