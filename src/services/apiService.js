import urlsApi from '../client/urlsApi.js';
import axios from 'axios';

export default class ApiService {
	constructor(db) {
		this.db = db;
	}
	async ipTracking(ip) {
		try {
			const res = await axios.get(urlsApi.IP_TRACKING(ip));
			const countryCode = res.data.countryCode3;

			//voy a buscar a la db con el codigo iso
			// const countryInfo = this.db.getCountryInfo(countryCode);
			console.log('tengo que buscar la info a la api de countries');
			return countryCode;
		} catch (err) {
			console.log(err);
		}
	}

	// async countryData(countryCode) {
	// 	try {
	// 		const res = await axios.get(urlsApi.COUNTRY_INFO(countryCode));
	// 		const countryCode = res.countryCode3;

	//       //voy a buscar a la db con el codigo iso
	//       const countryInfo = await this.db.getCountryInfo(countryCode);

	//       if (countryInfo) {
	//          //
	//       } else {
	//          const
	//       }

	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }
}
