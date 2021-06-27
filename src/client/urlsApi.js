const IP_TRACKING = (ip) => {
	return `https://api.ip2country.info/ip?${ip}`;
};

const COUNTRY_INFO = (countryCode) => {
	return `https://restcountries.eu/rest/v2/alpha/${countryCode}?fields=name;nativeName;capital;currencies;languages;latlng;timezones`;
};

const CURRENCY_INFO = () =>
	`http://data.fixer.io/api/latest?access_key=4505deab3de167c7928d0626eaffca17`;

export default {
	IP_TRACKING,
	COUNTRY_INFO,
	CURRENCY_INFO,
};
