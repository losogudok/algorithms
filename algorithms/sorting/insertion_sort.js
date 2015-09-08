// Сортировка вставкой
// каждый элемент массива меняем с предыдущим
// до тех пор, пока предыдущий больше данного

function insertionSort(array) {
	var index = 1,
		position,
		temp;
	// Итерация по массиву
	for (index; index < array.length; index++) {
		position = index;
		currentValue = array[index];

		// Пока предыдущий элемент больше текущего, меняем их местами
		while (position > 0 && array[position - 1] > currentValue) {
			array[position] = array[position - 1];
			position--;
		}
		array[position] = currentValue;
	}

	return array;
}

module.exports = insertionSort;