/*Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string.*/

function Palindrome(str) { 

  // code goes here    
  var output = str.match(/[a-z]/ig);
  console.log(output);
  
  var word = output.reverse();
  console.log(word);
  
 
  for(var i = 0; i < output.length; i++){
    for(var j = 0; j < word.length; j++){
      if(output[i] != word[j]){
        console.log(false);
        break;
        return false;
      }else{
        console.log(true);
        return true;
      }//end of if/else
    } break;//end of inside for
  }//end of outside for



  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
