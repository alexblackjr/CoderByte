/*Solved by Alexander Black on 03/09/15. Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains 
(ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. */

function WordCount(str) { 
  
  str = str.split(' ');
  str = str.length;
  return str; 
         
}

WordCount();   