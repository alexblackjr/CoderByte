/*Solved by Alexander Black on 08/31/15. You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments. */

function destroyer(arr) {
  // Remove all the values
  var loops = (arr.length - 1);
  for(var i =0; i <= loops; i++){
    for(var j = 0; j < arr.length; j++){
      if(arguments[i] === arr[j]){
        arr.splice(j,1);
        i--;      
      }
    }  
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);