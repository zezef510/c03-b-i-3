function total(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + total(arr.slice(1));
    }
}
const arr = [1, 2, 3, 4, 5];
const sum = total(arr);
console.log(sum)

