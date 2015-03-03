
function createRandArray(max) {
	console.time('create rand array');
	var resultArr = [],
		i;

	for (i = 0; i < max; i++) {
		resultArr[i] = i;
	}

	for (i = 0; i < max; i++) {
		var temp = resultArr[i];
		var randIndex = Math.round(Math.random() * max);

		resultArr[i] = resultArr[randIndex];
		resultArr[randIndex] = temp;
	}

	console.timeEnd('create rand array');
	return resultArr;
}

function createRandNumber(max, min) {
	if (arguments.length !== 2) {
		min = 0;
	}
	return Math.round((Math.random() + min) * (max - min));
}

module.exports.createRandArray = createRandArray;
module.exports.createRandNumber = createRandNumber;