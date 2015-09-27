/*Solved by Alexander Black Jr. on 05/03/15. Repeat a given string (first argument) n times 
(second argument). Return an empty string if n is a negative number.*/

function repeat(str, num) {
  // repeat after me
  var container = "";
  
  for(var i = 0; i < arguments[1]; i++){
    container += arguments[0];
  }
  str = container;
  return str;
}

repeat("abc", 3, "");