/*Solved by Alexander Black on 03/05/15. Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains 
(ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. */

function VowelCount(str) { 

  var count = str.match(/[aeiou]/ig);
  str = count.length;
  return str; 
         
}
   
VowelCount();   
