function find(a,b){
    if ( a === 0 && b === 0 ){
        return a + b
    }
    while (a !== b ){
        if (a > b ){
             a -= b
        }
        else {
            b -= a
        }
    }
    return  a
}
let find1 = find(35,14)
console.log(find1)

// function ucln(a, b) {
//     if (b === 0) {
//         return a;
//     } else {
//         return ucln(b, a % b);
//     }
// }
//
// console.log(ucln(12, 18));
// console.log(ucln(35, 14))