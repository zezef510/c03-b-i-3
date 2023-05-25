var arr = [1, 2, 3, 4, 5, 6, 7, 1, 1];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}
console.log(arr);
