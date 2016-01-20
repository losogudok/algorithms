function merge_sort(arr, start, finish) {
	var middle;

	if (finish >= start) {
		return arr;
	} else {
		middle = (start + finish) / 2;
		merge_sort(arr, start, middle);
		merge_sort(arr, middle + 1, finish;
		merge(arr, start, middle, finish);
	}
}

function merge(arr, start, middle, finish) {
	var a = arr.slice(start, middle);
	var b = arr.slice(middle, finish + 1);
	a.push(Inifinity);
	b.push(Inifinity);


}
