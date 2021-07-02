//get
export function setCurrentTimes(hourDifference) {
	let setHourDifference = '';
	hourDifference.forEach(
		(ct) => (setHourDifference += `${ct.date} (${ct.offset})`)
	);
	return setHourDifference;
}

export const getHsDifference = (timezones) => {
	const hourDifference = [];
	timezones.forEach((timezone) => {
		const formatHour = getFormatHour(timezone); //
		const currentTime = new Date().setHours(
			getCurrentUTCHours() + formatHour
		);
		hourDifference.push({
			date: toTimeOnly(new Date(currentTime)),
			offset: timezone,
		});
	});
	return setCurrentTimes(hourDifference);
};

//format timezones
const getFormatHour = (timezone) => {
	const formatHour = parseFloat(timezone.substring(3));
	return isNaN(formatHour) ? 0 : formatHour;
};

//getCurrentUTCHours
function getCurrentUTCHours() {
	const currentDate = new Date();
	return currentDate.getHours() + ARG_HOUR_OFFSET;
}

const ARG_HOUR_OFFSET = 3;

//format time
function toTimeOnly(date) {
	const h = (date.getHours() < 10 ? '0' : '') + date.getHours();
	const m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	const s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
	return h + ':' + m + ':' + s;
}
