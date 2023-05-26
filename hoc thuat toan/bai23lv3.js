function total(n) {
    return n[0] + total(n.slice(1));
}
var n = [1, 2, 3, 4, 5];
var sum = total(n);
console.log(sum);
