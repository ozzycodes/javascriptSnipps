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
	console.log(this);
}

var logPersonName = logName.bind(person);

logPersonName();