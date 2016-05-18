/*Solved by Alexander Black on 01/11/16. Bonfire: Sorted Union. Write a function that takes two or more arrays and returns a new array of 
unique values in the order of the original provided arrays. In other words, all values present from 
all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted 
in numerical order.*/

function unite(arr1, arr2, arr3) {
     
  for(var i = 0; i < (arguments.length - 1); i++){
     //find length of arguments
     
    for(var j = 0; j < (arguments[i+1].length); j++){
         //loops through the next argument
        
      
         if(arguments[0].indexOf(arguments[i+1][j]) < 0){
         
           arguments[0].push(arguments[i+1][j]);
           console.log(arguments[i]);
         }
     }
     
  }
  return arguments[0];
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);