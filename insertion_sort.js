function insertion_sort(array) {
	var i = 1,
		j,
		temp;

	for (i; i < array.length; i++) {
		j = i;
		while (array[j - 1] > array[i] && j > -1) {
			j--;
		}
		temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	}

	return array;
}

console.log(insertion_sort([3, 11, 2, 1, 1, 99, 45, 43, 42, 11]));