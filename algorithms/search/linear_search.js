function linear_search(arr, number) {
    var not_found = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
           return  i;
        }
    }

    return not_found;
}

module.exports = linear_search;


