import urlsApi from '../client/urlsApi.js';
import { getLanguage, getCurrency } from '../utils/buildResponse.js';
import axios from 'axios';

export default class ApiService {
	constructor(dbClient) {
		this.dbClient = dbClient;
	}
	async ipTracking(ip) {
		try {
			const res = await axios.get(urlsApi.IP_TRACKING(ip));
			const countryCode = res.data.countryCode.toLowerCase();

			//voy a buscar a la db con el codigo iso
			const countryInfo = await this.dbClient.getCountryInfo(countryCode);
			console.log('response db: ', countryInfo);
			if (countryInfo != '') {
				console.log('voy a buscar datos a la db');
				return countryInfo;
			}
			//Si no hay datos llamo a la api country
			const resCountry = await axios.get(urlsApi.COUNTRY_INFO(countryCode));
			const { data } = resCountry;
			const { name, nativeName, currencies, languages, timezones, latlng } =
				data;

			//call getCurrency()
			const currencyInfo = await getCurrency(currencies);
			const [{ code, nameCurrency, symbol }] = currencyInfo;
			
			//call getLanguage()
			const resLenguage = await getLanguage(languages);
			const [{ iso639_1, native }] = resLenguage;

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
				timezones: 'timezone',
				coordinates: {
					latitude: latlng[0],
					longitude: latlng[1],
					distanceToBsAs: 1,
				},
			};

			//llamo a la db para insertar el model
			//await this.dbClient.postCoutryInfo(countryModel);

			//API CURRENCY
			const resCurrency = await axios.get(urlsApi.CURRENCY_INFO(code));
			const currencyRate = Object.values(resCurrency.data.rates);
			console.log(currencyRate[0]); // value de la conversion a U$S

			//call buildResponse()

			return countryModel;
		} catch (err) {
			console.log(err);
		}
	}
}
