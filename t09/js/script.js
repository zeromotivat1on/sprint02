function getFormattedDate(dateObject) {
	const dateIndex = dateObject.getDate();
	const dates = [
		"00.","01.","02.","03.","04.","05.","06.","07.","08.","09.","10.",
		"11.","12.","13.","14.","15.","16.","17.","18.","19.","20.",
		"21.","22.","23.","24.","25.","26.","27.","28.","29.","30.","31."
	]
	const monthIndex = dateObject.getMonth();
	const months = [
		"01.","02.","03.","04.","05.","06.","07.","08.","09.","10.", "11.", "12."
	]
	const year = dateObject.getFullYear();
	const hourIndex = dateObject.getHours();
	const hours = [
		"00:","01:","02:","03:","04:","05:","06:","07:","08:","09:","10:",
		"11:","12:","13:","14:","15:","16:","17:","18:","19:","20:",
		"21:","22:","23:","24:","25:","26:","27:","28:","29:","30:",
        "31:","32:","33:","34:","35:","36:","37:","38:","39:","40:",
        "41:","42:","43:","44:","45:","46:","47:","48:","49:","50:",
        "51:","52:","53:","54:","55:","56:","57:","58:","59:",
	]
	const minuteIndex = dateObject.getMinutes();
	const minutes = [
		"00","01","02","03","04","05","06","07","08","09","10",
		"11","12","13","14","15","16","17","18","19","20",
		"21","22","23","24","25","26","27","28","29","30",
        "31","32","33","34","35","36","37","38","39","40",
        "41","42","43","44","45","46","47","48","49","50",
        "51","52","53","54","55","56","57","58","59",
	]
	const dayIndex = dateObject.getDay();
	const days = {
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
		7: "Sunday"
	}

	const res = `${dates[dateIndex]}${months[monthIndex]}${year} ${hours[hourIndex]}${minutes[minuteIndex]} ${days[dayIndex]}`;
	return res;
}