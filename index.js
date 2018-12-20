"use strict";

function date0parser(date, format) {
	this.date = date;
	this.format = format;
	this.truems = date ? (date.toString().length>10) : false;
}


date0parser.now = function(format=1) {
	var tDate = new Date();
	switch (format) {
		case 1:
			return `${tDate.getFullYear()}-${tDate.getMonth()}-${tDate.getDate()}`;
		case 1.1:
			return `${tDate.getFullYear()}-${parseDate(tDate, 1.1)}`;
		case 2:
			return `${tDate.getFullYear()}/${tDate.getMonth()}/${tDate.getDate()}`;
		case 2.2:
			return `${tDate.getFullYear()}/${parseDate(tDate, 2.2)}`;
	}
};

date0parser.convert = function(format, ts) {
	if (!format || !ts) throw 'please provide the format code and date';
	var eq;
	switch(ts.toString().length) {
		case 13:
			eq = 1; break;
		case 12:
			eq = 2; break;
		case 11:
			eq = 3; break;
		case 10:
			eq = 4; break;
		default:
			throw 'incorrect timestamp';
	}
	var tDate = new Date(ts*1);
	switch (format) {
		case 1:
			return `${tDate.getFullYear()}-${tDate.getMonth()}-${tDate.getDate()}`;
		case 1.1:
			return `${tDate.getFullYear()}-${parseDate(tDate, 1.1)}`;
		case 2:
			return `${tDate.getFullYear()}/${tDate.getMonth()}/${tDate.getDate()}`;
		case 2.2:
			return `${tDate.getFullYear()}/${parseDate(tDate, 2.2)}`;
	}
};

date0parser.getDateTime = function(format=1) {
	var tDate = new Date();
	return format==1 ? `${tDate.getFullYear()}-${parseDate(tDate, 1.1)} ${tDate.getHours()}:${tDate.getMinutes()}:${tDate.getSeconds()}:00`
           : `${tDate.getFullYear()}-${parseDate(tDate, 1.1)} ${tDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;	
}

function parseDate(_date, v) {
	let _month = ("0" + _date.getMonth()).slice(-2);
	let _day = ("0" + _date.getDate()).slice(-2);
	switch (v) {
		case 1.1:
			return `${_month}-${_day}`;
		case 2.2:
			return `${_month}/${_day}`;
	}
}


module.exports = date0parser;

