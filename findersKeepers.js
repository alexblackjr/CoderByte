/*Solved by Alexander Black on 03/21/16. Create a function that looks through an array (first argument) and returns the
first element in the array that passes a truth test (second argument).*/

function find(arr, func) {
  var num = 0;
  var output = arr.filter(arguments[1]);
  num = output[0];
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });