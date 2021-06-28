const IP_TRACKING = (ip) => {
	return `https://api.ip2country.info/ip?${ip}`;
};

const COUNTRY_INFO = (countryCode) => {
	return `https://restcountries.eu/rest/v2/alpha/${countryCode}?fields=name;nativeName;capital;currencies;languages;latlng;timezones`;
};

const CURRENCY_INFO = (code) =>
	`http://data.fixer.io/api/latest?access_key=798ee75e471ba5dad31f752535513c61&symbols=${code}`;

export default {
	IP_TRACKING,
	COUNTRY_INFO,
	CURRENCY_INFO,
};
