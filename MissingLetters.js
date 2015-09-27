/*Solved by Alexander Black Jr. on 09/02/15. Missing letters - Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  
  var input = str.split('');
  var nextNumber = 0;
  var convert = '';
  
  for(var i = 0; i < input.length; i++){
    if(str.charAt(i + 1) === ""){
      return str;
    }else if((str.charCodeAt(i) + 1) === str.charCodeAt(i + 1) ){
      var j = i;
      ++j;
      if(j === (input.length - 1)){
        return undefined;
      }
     continue;
    }else{
      nextNumber = str.charCodeAt(i) + 1;
      convert = String.fromCharCode(nextNumber);
      str = convert;
    }
  }
   
  return str;
}

fearNotLetter('abce');