function checkBrackets(str) {
	if(!str) {
		return -1;
	}
	
	var found = false;
	for(let i = 0; i < str.length; ++i) {
		if (str[i] === '(' || str[i] === ')') found = true;
	}
	if(found == false) {
		return -1;
	}

	for (let i = 0; i < str.length; ++i) {
        if (str[i] === '(') {
			for(let j = i; j < str.length; ++j) {
				if(str[j] == ')') {
					str = str.substr(0, i) + 'x' + str.substr(i + 1);
					str = str.substr(0, j) + 'x' + str.substr(j + 1);
					break;
				}
			}
        }
		if (str[i] === ')') {
			for(let j = i; j > 0; --j) {
				if(str[j] == '(') {
					str = str.substr(0, i) + 'x' + str.substr(i + 1);
					str = str.substr(0, j) + 'x' + str.substr(j + 1);
					break;
				}
			}
        }
	}
	var res = 0;
	for (let i = 0; i < str.length; ++i) {
		if (str[i] === '(' || str[i] === ')') res++;
	}
	return res;
}