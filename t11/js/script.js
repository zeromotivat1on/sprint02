function addWords(obj, wrds) {
	let arr = [], result = '';
	obj.words += ` ${wrds}`;
	
	arr = obj.words.split(' ');
	arr.sort(function(a, b) {
		if (a.length < 1 || b.length < 1)
		return a.length - b.length;
		return 1;
	});
	while (arr[0].length < 1) arr.shift();

	arr = arr.filter((item, index) => arr.indexOf(item) === index);
	
	arr.forEach(element => {
		result = result.concat(result.length < 1 ? '' : ' ', element);
	});
	obj.words = result;
}

function removeWords(obj, wrds) {
	let arr = [], result = '';
	obj.words += ` ${wrds}`;

	arr = obj.words.split(' ');
	del_arr = wrds.split(" ");
	arr.sort(function(a, b) {
		if (a.length < 1 || b.length < 1)
		return a.length - b.length;
		return 1;
	});
	while (arr[0].length < 1) arr.shift();
	del_arr.sort(function(a, b) {
		if (a.length < 1 || b.length < 1)
		return a.length - b.length;
		return 1;
	});
	while (del_arr[0].length < 1) del_arr.shift();

	for (let i = 0; i < del_arr.length; i++) {
        let index = undefined;
        while ((index = arr.indexOf(del_arr[i])) !== -1) {
            arr.splice(index, 1);
        }
    }

	arr = arr.filter((item, index) => arr.indexOf(item) === index);
	arr.forEach(element => {
		result = result.concat(result.length < 1 ? '' : ' ', element);
	});
	obj.words = result;
}

function changeWords(obj, oldWrds, newWrds) {
	let arr = [], arrOldWrds = [], arrNewWrds = [], result = '';

	arr = obj.words.split(' ');
	arr.sort(function(a, b) {
		if (a.length < 1 || b.length < 1)
		return a.length - b.length;
		return 1;
	});
	while (arr[0].length < 1) arr.shift();

	arr = arr.filter((item, index) => arr.indexOf(item) === index);
	
	arrOldWrds = oldWrds.split(' ');
	arrOldWrds.sort(function(a, b) {
		if (a.length < 1 || b.length < 1)
		return a.length - b.length;
		return 1;
	});
	while (arrOldWrds[0].length < 1) arrOldWrds.shift();

	arrOldWrds = arrOldWrds.filter((item, index) => arrOldWrds.indexOf(item) === index);
	
	arrNewWrds = newWrds.split(' ');
	arrNewWrds.sort(function(a, b) {
		if (a.length < 1 || b.length < 1)
		return a.length - b.length;
		return 1;
	});
	while (arrNewWrds[0].length < 1) arrNewWrds.shift();

	arrNewWrds = arrNewWrds.filter((item, index) => arrNewWrds.indexOf(item) === index);

	arrOldWrds.forEach(pos => {
		if(arr.indexOf(pos) === -1)
			return 0;
		else
			arr.splice(arr.indexOf(pos), 1);
	});
	obj.words = arr.concat(arrNewWrds).join(" ");
}