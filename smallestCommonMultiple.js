/*Solved by Alexander Black Jr. 03/2/16. Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily 
be in numerical order. e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/

function smallestCommons(arr) {
  var x, y, box = [], a = 1, multiplier, setBoolean;
  
  //sort the arguments order 
  if(arguments[0][0] > arguments[0][1]){
    x = arguments[0][1];
    y = arguments[0][0];
  }else{
    x = arguments[0][0];
    y = arguments[0][1];
  }
 
  //conrol while loop with boolean
  setBoolean = true;
  
  //list the numbers between x and y
   for(var i = x; i < y; i++){
      box.push(i);
   }
 
  //loop to check for smallest common multiple
  while(setBoolean){
    multiplier = y * a;
   for(var j = 0; j < box.length; j++){
      if((multiplier % box[j]) === 0 ){
        if(box[j] === (y - 1)){
          setBoolean = false;
        }
        continue;
      }else{
        break;
      }
    }
    a++;
  }
  arr = multiplier;
  return arr;
}


smallestCommons([1,5]);
