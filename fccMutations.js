/*Solved by Alexnader Black Jr. on 08/31/15. Bonfire: Mutations: Return true if the string in the first element 
of the array contains all of the letters of the string in the second element of the array. For example, 
['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, 
ignoring case. The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 
'y'. Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.*/

function mutation(arr) {
  var firstWord = arr[0].toLowerCase().split(''); 
  var secondWord = arr[1].toLowerCase().split('');  
  var box = [];
 
  for(var i = 0; i < secondWord.length; i++){
     for(var j = 0; j < firstWord.length; j++){
       if(i === secondWord.length - 1 && box[0] === undefined){
         return false;
       }else if(secondWord[i] === firstWord[j]){
         box.push(secondWord[i]);
         break;
       }else{
         continue;
       }

    }
 }
  
  if(box.length === secondWord.length){
    arr = box;
    return true;
  }else{
    return false;
  }
 
  return arr;
}

mutation(['hello', 'Hello']);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


