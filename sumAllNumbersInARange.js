/*Solved by Alexander Black on 06/21/15. We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.*/

function sumAll(arr) {
  var smallNumber;
  var largeNumber;
  var total = 0;
  
  if(arguments[0][0] > arguments[0][1]){
    largeNumber = arguments[0][0];
    smallNumber = arguments[0][1];
  }else{
    largeNumber = arguments[0][1];
    smallNumber = arguments[0][0];
  }
  
  for(var i = smallNumber; i <= largeNumber; i++){
    total += i;
  }
  
  return total;
}

sumAll([1, 4]);
