function selection_sort(array) {
	var i = 0,
		j,
		temp,
		smallest;

	for (i; i < array.length; i++) {
		smallest = i;
		for (j = i + 1; j < array.length; j++) {
			if (array[j] < array[smallest]) {
				smallest = j;
			}
		}
		temp = array[i];
		array[i] = array[smallest];
		array[smallest] = temp;
	}

	return array;
}


console.log(selection_sort([3, 11, 2, 1, 1, 99, 45, 43, 42, 11]));