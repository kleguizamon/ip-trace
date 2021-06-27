import urlsApi from '../client/urlsApi.js';
import axios from 'axios';

export default class ApiService {
	constructor(dbClient) {
		this.dbClient = dbClient;
	}
	async ipTracking(ip) {
		try {
			const res = await axios.get(urlsApi.IP_TRACKING(ip));
			const countryCode = res.data.countryCode3;

			//voy a buscar a la db con el codigo iso
			const countryInfo = await this.dbClient.getCountryInfo(countryCode);
			console.log('response db: ', countryInfo);
			if (countryInfo) {
				//traer datos de la db
			}
			const resCountry = await axios.get(urlsApi.COUNTRY_INFO(countryCode));
			const country = resCountry.data;
			const { name, nativeName, currencies, languages, timezones, latlng } =
				country;
			//currencies, timezones, latlng);

			//languages
			const getLanguage = languages.map((languages) => {
				return {
					iso639_1: languages.iso639_1,
					iso639_2: languages.iso639_2,
					nativeName: languages.nativeName,
				};
			});
			// console.log('getLanguage:', ...getLanguage);
			// const {...test } = getLanguage;
			// console.log('test: ',test)
			//latitud longitud
			const getLatlng = latlng.map((latlng) => {
				const latlngModel = {
					latitude: latlng[0],
					longitude: latlng[1],
				};
				return latlngModel;
			});

			const countryModel = {
				ISOcode: 'getLanguage.iso639_2',
				country: {
					name: name,
					native: nativeName,
				},
				languages: [
					{
						nativeName: 'getLanguage.nativeName',
						iso639_1: 'getLanguage.iso639_1',
					},
				],
				timezones: '',
				coordinates: {
					latitude: getLatlng.latitude,
					longitude: getLatlng.longitude,
					distanceToBsAs: '',
				},
			};

			return countryModel;
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
