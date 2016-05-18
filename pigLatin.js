/*Solved by Alexander Black Jr. on 09/27/15. Translate the provided string to pig latin. Pig Latin takes the first consonant 
(or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.*/

function translate(str) {
  var vowel = str.match(/^[aeiou]/);
  var firstVowel = str.match(/[aeiou]/);
  var letters = str.split('');
     
  if(vowel){
    var connect = letters.join('');
    connect += 'way';
    str = connect;
 }else{
    var position = letters.indexOf(firstVowel.join());
    var collectLetters = letters.splice(0,position);
    var newWord = letters.concat(collectLetters).join('');
    newWord += 'ay';
    str = newWord;
 }

 return str;
}

translate("consonant");