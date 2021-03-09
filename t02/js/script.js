var animal_name = prompt("What animal is the superhero most similar to?");
if(/^[A-Z]{1,20}$/ig.test(animal_name) == false) {
	alert("Animal name must be <= 20 characters, contain one word and only letters");
	exit();
}

var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
if(/^male$/ig.test(gender) == false &&
	/^female$/ig.test(gender) == false &&
	/^$/ig.test(gender) == false) {
	alert("Gender can be male or female");
	exit();
}

var age = prompt("How old is the superhero?");
if(/^[0-9]{1,5}$/ig.test(age) == false ||
	age[0] == "0") {
	alert("Age must be <= 5 characters and contain only numbers and does not start with 0");
	exit();
}

var descr;
if(gender == "male") {
	if(age < 18) descr = "boy";
	else descr = "man";
}

if(gender == "female") {
	if(age < 18) descr = "girl";
	else descr = "woman";
}

if(gender == "") {
	if(age < 18) descr = "kid";
	else descr = "hero";
}

var name = animal_name + "-" + descr;

alert("The superhero name is: " + name + "!");