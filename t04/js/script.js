function checkDivision(beginRange, endRange) {
	if(beginRange * 1 > endRange * 1) {
		let temp = beginRange;
		beginRange = endRange;
		endRange = temp;
	}
	if(!beginRange) beginRange = 1;
	if(!endRange) endRange = 100;
	let res = "";
	for(let i = beginRange; i - 1 != endRange; ++i) {
		if(i % 2 == 0) {
			res += i + " is even";
			if(i % 3 == 0) {
				res += ", a multiple of 3";
				if(i % 10 != 0) res += "\n";
			}
			if(i % 10 == 0) res += ", a multiple of 10\n";
			if(i % 3 != 0 && i % 10 != 0) res += "\n";
		}
		else res += i + " -\n";
	}
	console.log(res);
}

var range = prompt("Type the beginning and end of a range from 1 to 100 with space between.\nAlso you can use 1 parameter to input range as program has default range [1, 100]. In addition, program supports incorect range (swaps it)\n Example: 1 20 -> from 1 to 20 | 20 -> from 20 to 100 | <space>10 -> from 1 to 10 | 20 5 -> from 5 to 20");
var arrRange = range.split(" ");

checkDivision(arrRange[0], arrRange[1]);