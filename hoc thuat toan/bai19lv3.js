function zeroSum(arr){
    const prefixSum = [0]
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        prefixSum.push(sum)
    }
    for (let k = 0; k < prefixSum.length; k++) {
        for (let j = k+1; j < prefixSum.length; j++) {
            if(prefixSum[k] - prefixSum[j] === 0){
                return arr.slice(k,j)
            }
        }
    }
    return  null
}
let  arr = [4, -6, 3, -1, 4, 2, 7];
console.log(zeroSum(arr));