/*Solved by Alexander Black on 03/01/15. Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning 
the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for 
the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and 
will have at least one letter. */

function SimpleSymbols(str) { 
  
  var one = str.match(/^\+[a-z]\+/ig);
  var two = str.match(/\+[a-z]^\+/ig);
  if(one === null && two === null) return false;
  return true;
         
  return str; 
         
}

SimpleSymbols(); 
