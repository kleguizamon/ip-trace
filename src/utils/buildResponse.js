export const getLanguage = (languages) => {
	const languagesObj = languages.map((languages) => {
		return {
			iso639_1: languages.iso639_1,
			iso639_2: languages.iso639_2,
			native: languages.nativeName,
		};
	});
	return languagesObj;
};

export const getCurrency = (currency) => {
	const currencyObj = currency.map((currency) => {
		return {
			code: currency.code,
			nameCurrency: currency.name,
			symbol: currency.symbol,
		};
	});
	return currencyObj;
};
