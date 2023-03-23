$(function(params) {
    
})
function fizbuz(n) {
    if (n === 0) {
        return " ";
    }
    else{
        let txt = ""
        for (let index = 1; index < n; index++) {
          txt +=fizbuzzErtek(index) + ", ";
        }
        txt += fizbuzzErtek(n);
        return txt
    }
    
}
function fizbuzzErtek( x ) {
    let ertek = "";
    if (x % 5 === 0 && x % 3 === 0) {
        ertek= "fizzbuzz"
    }
    else if (x % 5 === 0) {
        ertek= "buzz"
    }
    else if ( x % 3 === 0) {
        ertek= "fizz"
    }
    else{
     ertek = x;
    }
    return ertek
    
}