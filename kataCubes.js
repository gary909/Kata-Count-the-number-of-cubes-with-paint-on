var countSquares = function(cuts){
    var sum = (6 * cuts * cuts) + 2;
    if (sum == 2){
        return 1;
    } else {
        return sum;
    }
}

console.log(countSquares(5));