import CountriesModel from '../model/countriesModel.js';
import StatsModel from '../model/countriesModel.js';

export default class QueryManager {
	async getCountryInfo(countryCode) {
		const query = await CountriesModel.find({ ISOcode: countryCode }).exec();
		return query;
	}
}
