//'.prototype' is used only by the 'new' operator. Is not the same as __proto__ 
//because prototype is only for one object
//Every function has a prototype property. Is the prototype of ANY function for 
//function constructors.
//The main function constructor shouldn't have ANY return values because it 
//will make it useless when making a new function with 'new'. 
//You can use return values later when adding methods with 'prototype'

function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;				   //firstname will be added to empty 
	this.lastname = lastname;                  //object and 'this' will be removed
	console.log('This function is invoked');   //no 'return' values
}

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname; //Both john and jane will 
}                                                //have access to this method

var john = new Person('John', 'Doe'); 
console.log(john);                    //it runs the entire function

var jane = new Person('Jane', 'Doe');
console.log(jane);                    //it runs the entire function


/*
Person {}
proto.js:9 This function is invoked
proto.js:13 Person {firstname: "John", lastname: "Doe"}
Person {}
proto.js:9 This function is invoked
proto.js:16 Person {firstname: "Jane", lastname: "Doe"}
*/

console.log(john.getFullName());

//John Doe
