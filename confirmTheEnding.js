/*Solved by Alexander Black Jr. on 07/10/15. Check if a string (first argument) ends with the given 
target string (second argument).*/

function end(str, target) {
  
  var separate = str.split(' ');
  var ruler = separate.length;
  if(separate.length > 1){
     if(separate[ruler - 1] === arguments[1]){
      return true;
     }else{
      return false;
     }
  }else{
    var newWord = str.split('');
    var newRuler = newWord.length;
    if(newWord[newRuler - 1] === arguments[1]){
      return true;
    }else{
      return false;
    }
  }
  
  return str;
}

end("Bastian", "n", "");