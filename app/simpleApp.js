var a = {
	firstName: "Jim",
	lastName: "Nugget",
	address: {
		city: "Reno",
		state: "Nevada",
		street: "Casino",
	},
	esto: function() {
		console.log(this);
		
		this.firstName = "Oswaldo";
		
		console.log(this.firstName);
		
		that = this;
		
		function estoOtro() {
			
			console.log(that);
			that.lastName = "Hitchcock";
			console.log(that.lastName);
			
		}
		estoOtro();
	},
	
	estoTambien : function() {
		console.log(this);
	}
}

nombre = a.firstName;
console.log(nombre);
a.esto();
a.estoTambien();

function prueba() {
	console.log(this);
	var firstLevel = "Primer Nivel";
	function prueba2() {
		console.log(this);
		function prueba3() {
			console.log(this);
		}
		prueba3();
	}
	prueba2();
}

prueba();