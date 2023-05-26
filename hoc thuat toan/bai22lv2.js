function check(inPut) {
    var reversed = '';
    for (var i = inPut.length - 1; i >= 0; i--) {
        reversed += inPut.charAt(i);
    }
    return inPut === reversed;
}
var inPut = "friend";
if (check(inPut)) {
    console.log(inPut + " la chuoi doi xung");
}
else {
    console.log(inPut + "  ko phai");
}
