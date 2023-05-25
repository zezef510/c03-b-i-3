function sortArray(array){
    const evenNumbers = array.filter(num => num % 2 === 0);
    const oddNumbers = array.filter(num => num % 2 !== 0)
    return [...evenNumbers,...oddNumbers]
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(sortArray(arr))