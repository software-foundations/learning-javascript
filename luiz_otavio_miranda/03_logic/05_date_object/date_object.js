const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const currentDate = {
	day,
	month,
	year,
	hour,
	minute,
	second,
};

console.log(currentDate);

function addZeroToLeft(number) {
	return number >= 10 ? number : `0${number}`;
}

function formatDate(currentDate) {
	return {
		day: addZeroToLeft(currentDate.day),
		month: addZeroToLeft(currentDate.month),
		year: addZeroToLeft(currentDate.year),
		hour: addZeroToLeft(currentDate.hour),
		minute: addZeroToLeft(currentDate.minute),
		second: addZeroToLeft(currentDate.second),
	};
}

console.log(formatDate(currentDate));
