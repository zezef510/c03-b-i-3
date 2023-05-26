function search(x, arr){
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] === x){
            return i
        }
    }
    return -1

}
let arr = [5, 10, 15, 20, 25]
let x = 15
let index = search(arr,x)
console.log(index)