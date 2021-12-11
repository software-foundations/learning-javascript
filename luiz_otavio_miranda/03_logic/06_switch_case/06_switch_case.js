function getDayOfWeek(dayOfWeek) {
	let dayOfWeekText;

	switch (dayOfWeek) {
		case 0:
			dayOfWeekText = 'Sunday';
			return dayOfWeekText;
		case 1:
			dayOfWeekText = 'Monday';
			return dayOfWeekText;
		case 2:
			dayOfWeekText = 'Tuesday';
			return dayOfWeekText;
		case 3:
			dayOfWeekText = 'Wednesday';
			return dayOfWeekText;
		case 4:
			dayOfWeekText = 'Thursday';
			return dayOfWeekText;
		case 5:
			dayOfWeekText = 'Friday';
			return dayOfWeekText;
		case 6:
			dayOfWeekText = 'Saturday';
			return dayOfWeekText;
	}
}

const date = new Date('1987-04-21 00:00:00');

const dayOfWeek = date.getDay();
const dayOfWeekText = getDayOfWeek(dayOfWeek);

console.log(dayOfWeek);
console.log(dayOfWeekText);
