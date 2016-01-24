
function createRandArray(max) {
	var resultArr = [],
		i;

	for (i = 0; i < max; i++) {
		resultArr[i] = i;
	}

	for (i = 0; i < max; i++) {
		var temp = resultArr[i];
		var randIndex = Math.floor(Math.random() * max);

		resultArr[i] = resultArr[randIndex];
		resultArr[randIndex] = temp;
	}

	return resultArr;
}

function createRandNumber(min, max) {
	if (arguments.length === 1) {
		max = min;
		min = 0;
	}
	return Math.round((Math.random() + min) * (max - min));
}

module.exports.createRandArray = createRandArray;
module.exports.createRandNumber = createRandNumber;
