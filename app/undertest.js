var arr1 = [1, 2, 3];

var arr2 = _.map(arr1, function(item) {
	return item * 3;
});

console.log(arr2);

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

var arr4 = _.filter(arr3, function(item) {
	return item % 2 === 0;
});

console.log(arr4);