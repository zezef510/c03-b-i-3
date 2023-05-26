function deQuy(n){
    if ( n < 10){
        return 1
    }
    else {
        return  1 +deQuy(Math.floor(n/10))
    }
}