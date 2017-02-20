var person = {
	firstname: 'Default',
	lastname: 'Default',
	greet: function(){
		return 'Hi ' + this.firstname;
	}
}

var john = Object.create(person); //Just as 'new' is for function constructors, 
john.firstname = 'John';          //Object.create works only on OBJECT LITERALS
john.lastname = 'Doe';            //Adding properties or methods is easy with dot notation

john.saymyname = function() {
	return 'Say your name, say your name' + ' ' + 'My name is ' + this.firstname + this.lastname;
}

person.voiceYourId = function() {
	return 'Identification Plz' + ' ' + 'My name is ' + this.firstname + this.lastname;
}

console.log(john);
console.log(john.greet()); 			//this function is inside the person(), inside __proto
console.log(john.saymyname());		//this function was added with the dot notation, not in __proto

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';


console.log(jane);
console.log(jane.greet()); 			//this function is inside the person(), inside __proto
console.log(jane.voiceYourId());    //this is inside __proto__ too, it was made under person() but
									//with dot notation




//Object {firstname: "John", lastname: "Doe"}


/*

'new' ONLY WORKS ON FUNCTIONS

var juan = new person;
console.log(juan);

Uncaught TypeError: person is not a constructor
    at objectCreate.js:14
*/