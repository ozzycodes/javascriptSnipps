var person = {
	firstname: 'Default',
	lastname: 'Default',
	greet: function(){
		return 'Hi ' + this.firstname;
	}
}

var john = Object.create(person); //It creates an empty object just like 'new'
john.firstname = 'John';          //But this works on OBJECT LITERALS
john.lastname = 'Doe';
john.saymyname = function() {
	return 'Say my name, say my name' + ' ' + 'My name is ' + this.firstname;
}

console.log(john);
console.log(john.saymyname());


//Object {firstname: "John", lastname: "Doe"}


/*

'new' ONLY WORKS ON FUNCTIONS

var juan = new person;
console.log(juan);

Uncaught TypeError: person is not a constructor
    at objectCreate.js:14
*/