export const getLanguage = async (languages) => {
	languages.map((languages) => {
		return {
			iso639_1: languages.iso639_1,
			iso639_2: languages.iso639_2,
			native: languages.nativeName,
		};
	});
};