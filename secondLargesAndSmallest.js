/*Solved by Alexander Black Jr. on 01/23/15. Have the function bigSmall(arr) take the array of numbers stored in arr and return 
the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] 
the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
 */

function bigSmall(arr){
  var container = [];
    
    function compare (value1, value2){
    if(value1 < value2){
      return -1;
    }else if (value1 > value2){
      return 1;
    }else{
      return 0;
    }
  }
  
  var sortOut = arr.sort(compare);  
  
  if(arr.length > 3){ 
     var big = sortOut[(sortOut.length - 2)];
     container.push(big);
     var secondSmall = sortOut[1];
     container.push(secondSmall);
  }else if(arr.length == 2){
     var big = sortOut[(sortOut.length-1)];
     container.push(big);
     var secondSmall = sortOut[0];
      container.push(secondSmall);
  }else{
     console.log('You must enter more than on number');
  }
  arr = container.join(' '); 
  console.log(arr);
}

bigSmall([100, 200, 3, 400, 5, 1]);