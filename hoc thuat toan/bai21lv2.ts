function  tinh(x,n){
    if( n === 0 ){
        return 1
    }
    else if(n % 2 === 0){
        const  y = tinh(x,n/2)
        return y*y
    }
    else {
        return x * tinh(x,n-1)
    }
}