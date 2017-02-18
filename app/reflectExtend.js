var person = {
	firstname : 'Default',
	lastname : 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

john.__proto__ = person;

for (var prop in john) {
	if (john.hasOwnProperty(prop)) {
	console.log(prop + ': ' + john[prop]);
	}
}

var frodo = {
	address: {
		street: 'Middle Earth',
		house: 'Over the hill'
	},
	city: 'Hobbiton'
}

var batman = {
	weapon: 'batarang',
	car: 'batmobile',
	girlfriend: 'Vicky Vale'
}


_.extend(john, frodo, batman);

console.log(john);



