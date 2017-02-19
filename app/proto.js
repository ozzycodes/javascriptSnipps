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

var john = new Person('John', 'Doe'); //NEW ONLY WORKS IN FUNCTIONS, NOT OBJECT LITERALS
console.log(john);                    //it runs the entire function

var jane = new Person('Jane', 'Doe');
console.log(jane);                    //it runs the entire function


//Object.create can ONLY be used with OBJECT LITERALS

/*
var juan = Object.create(Person('Juan', 'Perez'));
console.log(juan);
*/

/*
Uncaught TypeError: Object prototype may only be an Object or null: undefined
    at Function.create (<anonymous>)
    at proto.js:26
*/



/*
proto.js:10 Person {}
proto.js:13 This function is invoked
proto.js:21 Person {firstname: "John", lastname: "Doe"}
proto.js:10 Person {}
proto.js:13 This function is invoked
proto.js:24 Person {firstname: "Jane", lastname: "Doe"}
*/

console.log(john.getFullName());

//John Doe

//From efficency standpoint is better to add methods to function constructors
//through prototypes because not being present in the original function
//means every 'new' object wont have to carry that method. If hundreds of objects
// are made, the method is only linked saving memory.






