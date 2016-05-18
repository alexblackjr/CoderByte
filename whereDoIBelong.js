/*Solved by Alexander Black on 08/20/15. Return the lowest index at which a value (second argument) should 
be inserted into a sorted array (first argument). For example, where([1,2,3,4], 1.5) should return 1 because 
it is greater than 1 (0th index), but less than 2 (1st index).*/

function where(arr, num) {
  // Find my place in this sorted array.
   for(var i = 0; i < arr.length; i++){
    if(arguments[1] < arr[0]){
      arr.unshift(arguments[1]);
      break;
    }else if(arguments[1] > arr[i] && arguments[1] < arr[i + 1]){
      arr.splice(i + 1,0,arguments[1]);
      break;
     }else if(arguments[1] > arr[arr.length - 1]){
      arr.push(arguments[1]);
    }else{
      continue;
    }
   }num = arr.indexOf(arguments[1]);
  return num;
}

where([10, 20, 30, 40, 50], 30);