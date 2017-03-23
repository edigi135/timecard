'use-strict';

// Date string used as key in state tree
export function getDate() {
	return new Date().toString();
}

export function formatDate(d) {
	let dateString = d.split(' ').slice(0, 4).join('-');
	return dateString.toLowerCase();
}

// Time snapshot used as value in state/db
export function getTime() {
	let hour = new Date().getHours();
	let min = new Date().getMinutes();
	let sec = new Date().getSeconds();

	let ampm = hour > 12 ? 'pm' : 'am';

	// Left-pad numbers < 10 with 0
	if (min < 10) min = '0' + min;
	if (sec < 10) sec = '0' + sec;

	return `${ hour }:${ min }:${ sec }${ ampm }`;
}

export const week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];