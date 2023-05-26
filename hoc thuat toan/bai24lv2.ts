// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[i]
//         let j = i - 1
//
//         while (j >= 0 && arr[j] % 2 === 0 && arr[j] > a) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = a;
//     }
//     return arr
// }
//
//
// let array = [ 9,8,7,6,5,4,1,2]
// console.log(sort(array))
let array = [ 9,8,7,6,5,4,1,2]
let a = []
for (let i = 0; i < array.length; i++) {
    if ( array[i] % 2 === 0){
        a.push(array[i])
    }
}
a.sort((start, end) => start - end)
console.log(a)