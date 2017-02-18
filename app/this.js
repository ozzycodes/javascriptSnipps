var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function () {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
/*
	someFun : function() {
		console.log(this);
	}
*/
}



var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName()); //this. could be replace by person.getFullName without bind
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('------------');
}

var logPersonName = logName.bind(person); //bind creates a copy of logName into logPersonName
logPersonName('es', 'fr');

logName.call(person, 'en', 'jp'); //executes logName, with object "this" and arguments

logName.apply(person, ['ge', 'pt']); //Same as call, but with arguments in array, convenient when iterations of args

//function borrowing

var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
}

console.log(person.getFullName.apply(person2)) //using the function from person and apply the info from person2


//function currying

function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 5);
console.log(multiplyByTwo(4));














