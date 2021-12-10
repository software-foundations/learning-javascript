/*
Day			[0:12)
Afternoon 	[12:18)
Night		[18:24)

24 -> convert to -> 0
*/

function formatHour(hour) {
	if (hour === 24) {
		return 0;
	} else {
		return hour;
	}
}

function formatHourTwo(hour) {
	let formatedHour = String(hour).replace('24', 0);

	return parseFloat(formatedHour);
}

console.log(formatHour(24));

console.log(formatHourTwo(24));
