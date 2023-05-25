function chooseParis (n ,m ,heightA , heightB){
    const countDict = {}
    let count = 0
    for (let i = 0; i < heightA.length; i++) {
        let  h = heightA[i];
        if ( h in countDict){
            countDict[h] += 1
        }
        else {
            countDict[h] = 1
        }
    }
    for (let i = 0; i < heightB.length; i++) {
        let h = heightB[i];
        if ( h in countDict && countDict[h] > 0 ){
            count += 1  ;
            countDict[h] -= 1
        }
    }
    return count
}
let n = 1
let m  =  2
const heightA = [8, 4, 8, 5, 4, 9];
const heightB = [3, 8, 8, 8, 8, 4, 7];
const result = chooseParis(n, m, heightA, heightB);
console.log(result)