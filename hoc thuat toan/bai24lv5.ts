function countX(arr,x){
    let count = 0
    for (let i = 0; i < arr.length ;i++) {
        if(arr[i] === x ){
            count++
        }
    }
    return count
}
