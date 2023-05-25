
function printUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
         let count = 0
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                count++
            }
        }
        if (count ===1){
            console.log(arr[i])
        }
    }
}

printUnique([1,2,3,4,1,5,"A"])
function printUnique(arr) {
    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
    const nonUniqueArr = arr.filter((item, index) => arr.indexOf(item) !== index);
    const result = uniqueArr.filter((item) => !nonUniqueArr.includes(item));
    console.log(result);
}