function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var arr = [1, 2, 3, 5, 7, 9, 4, 6];
console.log(findMax(arr));
