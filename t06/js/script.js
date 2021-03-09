let name = prompt("Enter your first name", '');
let surname = prompt("Enter your last name", '');
var error = "Wrong input!";

let temp = isValid(name);
if (temp == null) {
    console.log(error);
    alert(error);
} else {
    temp = isValid(surname);
    if (temp === null) {
        console.log(error);
        alert(error);
    } else {
        greetings(name, surname);
    }
}

function upperFirstLetter(str) {
    const c = str.charAt(0).toUpperCase() + str.slice(1);
    return c;
}

function isValid(string) {
	var i = 0;
    while(i < string.length) {
        if(isNaN(string[i] == false) || !isLetter(string[i])) {
            return null;
		}
		i++;
    }
    return 1;
}

function isLetter(c) {
	return c.toLowerCase() != c.toUpperCase();
}

function greetings(name, surname) {
    var greetings = "Greetings, " + upperFirstLetter(name) + " " + upperFirstLetter(surname) + "!"
    alert(greetings);
    console.log(greetings);
}
