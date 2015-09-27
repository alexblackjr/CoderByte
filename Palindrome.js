/*Created by Alexander Black Jr. on 08/31/15. Have the function Palindrome(str) take the str parameter being 
passed and return the string true if the parameter is a palindrome,(the string is the same forward as it is backward) 
otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will 
not be part of the string.*/

function Palindrome(str) {
  
  var forwards = str.toLowerCase().match(/[a-z0-9]/g).join(''); 
  var backwards = str.toLowerCase().match(/[a-z0-9]/g).reverse().join(''); 
  if(forwards.length === backwards.length && forwards === backwards){
    console.log(true);
	return true;
  }else{
	 console.log(false);
    return false;
  }
}

Palindrome("A man, a plan, a canal. Panama");           
