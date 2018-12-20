"use strict";

function date0parser(date, format) {
	this.date = date;
	this.format = format;
	this.truems = date ? (date.toString().length>10) : false;
}


date0parser.now = function(format=1) {
	var tDate = new Date();
	return parseFormatHelper(tDate,format);
};

date0parser.convert = function(format=1, ts) {
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
			throw 'incorrect timestamp, please provide timestamp first followed by format';
	}
	var tDate = new Date(ts*eq);
	return parseFormatHelper(tDate, format);
};

date0parser.getDateTime = function(format=1) {
	var tDate = new Date();
	return format==1 ? `${tDate.getFullYear()}-${parseDate(tDate, 1.1)} ${tDate.getHours()}:${tDate.getMinutes()}:${tDate.getSeconds()}`
           : `${tDate.getFullYear()}-${parseDate(tDate, 1.1)} ${tDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;	
}

date0parser.addDays = function(date=Date.now(), days=0, format=2.2) {
	var __date = new Date(date);
	__date.setDate(__date.getDate() + days);
    return parseFormatHelper(__date, format);

}

function parseDate(_date, v) {
	let _month = (`0 ${_date.getMonth()+1}`).slice(-2);
	let _day = ("0" + _date.getDate()).slice(-2);
	switch (v) {
		case 1.1:
			return `${_month}-${_day}`; 
		case 2.2:
			return `${_month}/${_day}`;
	}
}

function parseFormatHelper(tDate, v) {
	switch (v) {
		case 1:
			return `${tDate.getFullYear()}-${tDate.getMonth()+1}-${tDate.getDate()}`;
		case 1.1:
			return `${tDate.getFullYear()}-${parseDate(tDate, 1.1)}`;
		case 2:
			return `${tDate.getFullYear()}/${tDate.getMonth()+1}/${tDate.getDate()}`;
		case 2.2:
			return `${tDate.getFullYear()}/${parseDate(tDate, 2.2)}`;
	}
} 



module.exports = date0parser;

