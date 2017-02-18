function Person() {
	console.log(this);
	this.firstname = 'John';
	this.lastname = 'Doe';
	console.log('this rules or sucks');
}

var john = new Person(); //new will create an empty object AND run function
						 //this in person will point to the new object, 
						 //when console.log executes it will remove 'this' leaving only
						 //firstname: John
						 //lastname: Doe
						 //example this.prop: value will be added
						 //to new object, only as prop: value
console.log(john);

//function constructors are used to construct OBJECTS. 
//the variable 'this' inside constructor points to new empty object
//and that object is returned from funtion automatically