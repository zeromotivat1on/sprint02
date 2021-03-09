var full_name = prompt("Enter your first and last name");
var arr_full_name = full_name.split(" ");
console.log(arr_full_name);
var error = "Wrong input!";

function upperFirstLetter(str) {
    const c = str.charAt(0).toUpperCase() + str.slice(1);
    return c;
}

if(!full_name || arr_full_name[0] == null || arr_full_name[1] == null || 
	arr_full_name[0] == "" || arr_full_name[1] == "" || arr_full_name[2] != null) {
	
	alert(error);
	console.log(error);
	exit();
}

var i = 0;
while(i < arr_full_name[0].length) {
	if(isNaN(full_name[i]) == false ||
		!(arr_full_name[0].charCodeAt(i) >= 65 && arr_full_name[0].charCodeAt(i) <= 90)) {
		alert(error);
		console.log(error);
		exit();
	}
	i++;
}
i = 0;
while(i < arr_full_name[1].length) {
	if(isNaN(full_name[i]) == false ||
		!(arr_full_name[0].charCodeAt(i) >= 97 && arr_full_name[0].charCodeAt(i) <= 122)) {
		alert(error);
		console.log(error);
		exit();
	}
	i++;
}

var greetings = "Greetings, " + upperFirstLetter(arr_full_name[0]) + " " + upperFirstLetter(arr_full_name[1]) + "!"

alert(greetings);
console.log(greetings);
