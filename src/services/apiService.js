import urlsApi from '../client/urlsApi.js';
import { getLanguage, getCurrency } from '../utils/buildData.js';
import { buildCountryModel } from '../client/databaseClient.js';
import { getHsDifference } from '../utils/timeManager.js';
import { buildResponse } from '../utils/buildResponse.js';
import { getDistanceToBsAs } from '../utils/distanceManager.js';
import axios from 'axios';

export default class ApiService {
	constructor(dbClient) {
		this.dbClient = dbClient;
	}
	async ipTracking(ip) {
		try {
			const res = await axios.get(urlsApi.IP_TRACKING(ip));
			const countryCode = res.data.countryCode.toLowerCase();

			//get ISOCode
			const countryInfo = await this.dbClient.getCountryInfo(countryCode);
			console.log('response db: ', countryInfo);
			if (countryInfo != '') {
				console.log('voy a buscar datos a la db');
				//call buildResponse
				return countryInfo;
			}
			//Si no hay datos llamo a la api country
			const resCountry = await axios.get(urlsApi.COUNTRY_INFO(countryCode));
			//const { data } = resCountry;
			const { name, nativeName, currencies, languages, timezones, latlng } =
				resCountry.data;

			const latitude = latlng[0];
			const longitude = latlng[1];

			//getCurrency()
			const currencyInfo = await getCurrency(currencies);
			const [{ code, nameCurrency, symbol }] = currencyInfo;

			//getLanguage()
			const resLenguage = await getLanguage(languages);
			const [{ iso639_1, native }] = resLenguage;

			//timeCalculator()
			const hourDifference = getHsDifference(timezones);

			//getDistanceToBsAs
			const distanceToBsAs = getDistanceToBsAs(latitude, longitude, 0);

			const countryModel = buildCountryModel(
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
			);

			//llamo a la db para insertar el model
			//await this.dbClient.postCoutryInfo(countryModel);

			//API CURRENCY
			const resCurrency = await axios.get(urlsApi.CURRENCY_INFO(code));
			const currencyRate = Object.values(resCurrency.data.rates);
			const conversionRate = currencyRate[0];

			//call builResponse
			const traceResponse = buildResponse(
				native,
				name,
				countryCode,
				nativeName,
				iso639_1,
				conversionRate,
				code,
				hourDifference,
				distanceToBsAs
			);

			return traceResponse;
		} catch (err) {
			console.log(err);
		}
	}
}
