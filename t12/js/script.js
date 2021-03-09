function concat(str1, str2) {
	concatStr.count = 0;

	function concatStr() {
		let str = prompt("Enter a string: ", "");
		if(!str) return str1;
		concatStr.count++;
		return str1.concat(" ", str);
	}
	if(str2 == undefined) {
		return concatStr;
	}

	return str1.concat(" ", str2);
}