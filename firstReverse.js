/*Solved by Alexander Black Jr. on 03/08/15.  Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
Use the Parameter Testing feature in the box below to test your code with different arguments.*/

function FirstReverse(str) { 
  var results = str.split('').reverse().join('');
  return results; 
         
}

FirstReverse('!noos gnimoc si neveS traP sraW ratS');  