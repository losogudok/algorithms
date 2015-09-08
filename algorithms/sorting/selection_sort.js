// Сортировка выбором
// На каждой итерации заменяем текущий элемент
// с наименьшим справа от текущего

function selectionSort(array) {
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

module.exports = selectionSort;