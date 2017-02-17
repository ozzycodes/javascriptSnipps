function tellMeWhen(callback) {
	var a = 2000;
	var b = 3000;
	
	callback();
}

tellMeWhen(function() {
	console.log('Just when you thought it would be safe');
});

tellMeWhen(function() {
	alert('It blows up in ya face.');
});