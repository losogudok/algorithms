// Stupid way to generate array (set actually) 
// with random unique numbers

console.time('generate random with set');

var testSet = new Set(),
	number;

while (testSet.size !== 100000) {
	number = Math.round(Math.random() * 1000000);
	testSet.add(number);
}

console.timeEnd('generate random with set');


// Here is a smart way

console.time('generate random with brain');
var testArr = [];
for (var i = 0; i < 100000; i++) {
	testArr[i] = i;
}

for (var i = 0; i < 100000; i++) {
	var temp = testArr[i];
	var randIndex = Math.round(Math.random() * 100000);

	testArr[i] = testArr[randIndex];
	testArr[randIndex] = temp;
}

console.timeEnd('generate random with brain');


// console.log(testArr.slice(99900, 100000));
console.log(new Set(testArr).size);