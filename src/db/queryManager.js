import CountryModel from '../model/countryModel.js'
import StatsModel from '../model/statsModel.js';

export default class QueryManager {
	getCountryInfo(countryCode) {
		const query = CountryModel.find({ ISOcode: countryCode }).exec();
		return query;
	}
}
