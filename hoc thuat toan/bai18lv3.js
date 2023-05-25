
function findLargestKElements(arr, k) {
    let  largestElements  = []
    for (let j = 0; j < k; j++) {
        let maxIndex = 0;
        let maxValue = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxIndex = i;
                maxValue = arr[i]
            }
        }
        largestElements.push(maxValue)
    }
    return largestElements
}
let k =  prompt(``)
let arr = [ 1 ,2 ,3 ,4 ,5, 6,9,6,5,4,3,2,8,6,7]
let find = findLargestKElements(arr,k)
console.log(find)

// function findLargestKElements(arr, k) {
//     // Sắp xếp mảng theo thứ tự giảm dần
//     arr.sort(function(a, b){return b - a});
//
//     // Lấy k phần tử đầu tiên
//     var largestElements = arr.slice(0, k);
//
//     return largestElements;
// }
//
// // Ví dụ
// var arr = [3, 5, 1, 8, 2, 7];
// var k = 3;
// var largestElements = findLargestKElements(arr, k);
// console.log(largestElements);  // Kết quả: [8, 7, 5]
