/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
Use the Parameter Testing feature in the box below to test your code with different arguments.*/

function FirstReverse(str) { 
  var x = str;
  var results = x.split('').reverse().join('');
  // code goes here  
  return results; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());  