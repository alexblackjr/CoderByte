/*Solved by Alexander Black on 07/15/15. Truncate a string (first argument) if it is longer than the given maximum string length 
(second argument). Return the truncated string with a "..." ending.*/

function truncate(str, num) {
  if(str.length === arguments[1] || arguments[1] > str.length){
      return str;
  }else{
     var output = str.substring(0,(arguments[1] - 3));
     str = output + "...";
  } 
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");
