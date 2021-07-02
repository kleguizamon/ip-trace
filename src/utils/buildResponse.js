import { getTimeStamp } from '../utils/buildData.js';

export const buildResponse = (
	native,
	name,
	countryCode,
	nativeName,
	iso639_1,
	conversionRate,
	code,
	hourDifference,
	distanceToBsAs
) => {
	const timeStamp = getTimeStamp();
	const traceResponse = {
		date: timeStamp,
		country: `${nativeName} (${name})`,
		iso_code: `${countryCode}`,
		languages: `[${native} (${iso639_1})]`,
		currency: `${code} (1 EUR = ${conversionRate} U$S)`,
		times: `[${hourDifference}]`,
		estimated_distance: `${distanceToBsAs} kms`,
	};
	return traceResponse;
};
