var utils = require('../other/random_generator');
var arr = utils.createRandArray(10);

function merge_sort(arr, start, finish) {
	var middle;
    
    if (start === undefined) start = 0;
	if (finish === undefined) finish = arr.length - 1;
	if (start >= finish) {
		return arr;
	} else {
		middle = Math.floor((start + finish) / 2);
		merge_sort(arr, start, middle);
		merge_sort(arr, middle + 1, finish);
		merge(arr, start, middle, finish);
	}
}

function merge(arr, start, middle, finish) {
	var a = arr.slice(start, middle + 1);
	var b = arr.slice(middle + 1, finish + 1);
	var i = 0;
    var j = 0;
	var k = start;
	a.push(Infinity); // Ограничители массива предотвращают ситуацию сравнения 
	b.push(Infinity); // с несуществующим элементом, когда одни из массива оказывается пустым

	for(k; k <= finish; k++) {
		if (a[i] <= b[j]) {
			arr[k] = a[i];
			i++;
		} else {
			arr[k] = b[j];
			j++;
		}
	}
}
console.log("Array at start ", arr); 
merge_sort(arr);
console.log("Array at finish ", arr);
