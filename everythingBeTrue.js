/*Solved by Alexander Black Jr. on 04/5/16. Check if the predicate (second argument) is truthy on 
all elements of a collection (first argument).*/

function every(collection, pre) {
  // Is everyone being true?
  var prop = pre;
   for(var i = 0; i < collection.length; i++){
    if( collection[i][pre] ){
      if( i === (collection.length - 1) ){
       pre = true; 
      }
      continue;
      
    }else{
      pre = false;
      break;
    }
  }
  
  
  return pre;
}

every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")