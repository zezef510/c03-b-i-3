function  deQuy (arr, k){
    if ( arr.length === 0 ){
        return 0
    }

        if (arr.length === k){
            return 1 + deQuy(arr.slice(1),k)
    }else {
            return deQuy(arr.slice(1),k)
        }
}



let arr = [ 1 ,2 ,3  ,5, 9,7, 10 ,22]
// function deQyt(arr: number[], k: number): number {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === k) {
//             count++;
//         }
//     }
//     return count;
// }