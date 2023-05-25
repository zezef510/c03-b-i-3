function checkArray(arr, n) {
    arr.sort(function(a, b) { return a - b; });
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return false;
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

if (checkArray(arr, n)) {
    console.log("Mang chua tat ca cac so tu 1 den " + n);
} else {
    console.log("Mang khong chua tat ca cac so tu 1 den " + n);
}
