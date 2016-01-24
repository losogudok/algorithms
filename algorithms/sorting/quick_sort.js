var utils = require('../other/random_generator');
var arr = utils.createRandArray(10);

function quick_sort(arr, start, end) {
    var q; // опорный элемент, относительно которого сортируются книги

    if (start === undefined) start = 0;
    if (end === undefined) end = arr.length - 1;
    if (start >= end) return;

    q = partition(arr, start, end);
    quick_sort(arr, start, q - 1);
    quick_sort(arr, q + 1, end);
}

function partition(arr, start, end) {
    var q = start; // служит границей междy группами элементов больших и меньших опорного
    var i = start; // служит границей между группой элементов больше опорного и неотсортированой группой
    var temp;

    for (; i < end; i++) {
        if (arr[i] <= arr[end]) {
           temp = arr[q];
           arr[q] = arr[i];
           arr[i] = temp;
           q++;
        }
    }
    temp = arr[q];
    arr[q] = arr[end];
    arr[end] = temp;
    return q;
}

console.log("Array at start", arr);
quick_sort(arr);
console.log("Array at end", arr);

