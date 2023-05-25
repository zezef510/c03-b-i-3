// function  maxSubarraySum(arr){
//         let max = 0
//         let maxEnd = 0
//     for (let i = 0; i < arr.length; i++) {
//         maxEnd += arr[i]
//         if (maxEnd < 0 ){
//             maxEnd = 0
//         }
//         if (max < maxEnd){
//             max = maxEnd
//         }
//     }
//     return max
// }
// const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// console.log(maxSubarraySum(arr));


// function maxSubarray(arr) {
//     let maxSum = -Infinity;
//     let currentSum = 0;
//     let start = 0;
//     let end = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         currentSum += arr[i];
//         if (currentSum > maxSum) {
//             maxSum = currentSum;
//             end = i;
//         }
//         if (currentSum < 0) {
//             currentSum = 0;
//             start = i + 1;
//         }
//     }
//     return arr.slice(start, end + 1);
// }
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const maxSub = maxSubarray(arr);
// console.log(maxSub)
let n = 0 // n = prompt
let best = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i ++) {
    for (let j = i; j < n; j ++) {
        let sum = 0;
        for (let    k = i; k <= j; k ++) {
            sum += arr[k];
        }
        best = Math.max(best, sum);
    }
}
