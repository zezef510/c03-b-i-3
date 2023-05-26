function  findMax(arr){
    let max = arr[0]
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
let arr = [1,2,3,5,7,9,4,6]
console.log(findMax(arr))
// function findMax(arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     } else {
//         const subMax = findMax(arr.slice(1));
//         return arr[0] > subMax ? arr[0] : subMax;
//     }
// }