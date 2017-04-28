/*Solved by Alexander Black on 04/23/17. Given a square matrix of size N x N, calculate the absolute 
difference between the sums of its diagonals.*/

function crissCross(arr) {
    var n = arr.length;
    var a = arr;
    var leftToRight = [], rightToLeft = [];
       
    for(var i = 0; i < a.length; i++){
        leftToRight.push(a[i][i]);
    }
    for(var k = (n - 1); k > -1; k--){
        rightToLeft.push( a[k][(n - 1) - k] );
    }
    
    function sumArray(arr){
        var sum = 0;
        for(var x = 0; x < arr.length; x++){
            sum += arr[x];
        }
        return sum;
    }
    var ltrSum = sumArray(leftToRight);
    var rtlSum = sumArray(rightToLeft);
    var difference = Math.abs(ltrSum - rtlSum);
    console.log(difference);
}

crissCross([ [11, 2, 4], [4, 5, 6], [10, 8, -12] ]) ;

