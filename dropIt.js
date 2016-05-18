/*Solved by Alexander Black Jr. on 03/21/16. Drop the elements of an array (first argument), starting from the front,
until the predicate (second argument) returns true. Return the rest of the array, otherwise return an empty array. */

function drop(arr, func) {
  // Drop them elements.
  var output = arguments[0].filter(arguments[1]);

  for(var i = 0; i < arguments[0].length; i++){
    if(arguments[0].indexOf(output[i])){
      arguments[0].shift();
    }else{
      break;
    }
    --i;
  }
  arr = arguments[0];
  return arr;
}

drop([1, 2, 3, 7, 4], function(n) {return n > 3;});