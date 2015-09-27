/*Solved by Alexander Black on 07/22/15. Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them as a multidimensional array.*/

function chunk(arr, size) {
  // Break it up.
 var extraArrays = Math.ceil(arguments[0].length/arguments[1]);
 var newBox = []
  
 for(var i = 0; i < extraArrays; i++){
       newBox.push([]);
       for(var j = 0; j < arguments[1]; j++){
          if(arr.length > 0){
            newBox[i].push(arr.shift());
          }else{
            break;
          } 
       }
 } 
  arr = newBox;
  return arr;
}

chunk(["a", "b", "c", "d", "e"], 2, "");