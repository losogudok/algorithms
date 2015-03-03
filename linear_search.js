var gen = require('./random_generator');

function dumb_linear_search(arr, number) {
    var not_found = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
           return  i;
        }
    }

    return not_found;
}


function sentinel_linear_search(arr, number) {
    var lastIndex = arr.length - 1,
        last = arr[lastIndex],
        i = 0;

    arr[lastIndex] = number;

    while (arr[i] !== number) {
        i++;
    }
    arr[lastIndex] = last;

    if (i !== arr[lastIndex] || arr[lastIndex] === number) {
        return i;
    }
    else {
        return -1;
    }
}

// Testing

var arr = gen.createRandArray(20000000);
var number = gen.createRandNumber(20000000);

console.log('Number is: ' + number);

console.time('dumb_linear_search');
dumb_linear_search(arr, 200000000);
console.timeEnd('dumb_linear_search');

console.time('sentinel_linear_search');
sentinel_linear_search(arr, 2000000000);
console.timeEnd('sentinel_linear_search');