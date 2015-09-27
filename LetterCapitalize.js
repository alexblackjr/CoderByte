/*Solved by Alexander Black Jr. on 03/08/15. Have the function LetterCapitalize(str) take the str parameter being 
passed and capitalize the first letter of each word. Words will be separated by only one space. */

function LetterCapitalize(str) { 

  var firstStep = str.split(' '); //tranform the string into an array
  var wordContainer = '';
  var box = [];
  for(var i = 0; i < firstStep.length; i++){
    wordContainer = firstStep[i];
    var tail = firstStep[i].replace(/^[a-z]/g,'');
      for(var j = 0; j < wordContainer.length; j++){
        wordContainer = wordContainer[0].toUpperCase();
        tail = wordContainer + tail;
      }
    box.push(tail);
  }str = box.join(' '); 
   return str; 
         
}

LetterCapitalize();