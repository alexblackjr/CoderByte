/*Solved by Alexander Black on 02/10/17. Write a function word_unscrambler that takes two inputs: a scrambled
word and a dictionary of real words.  Your program must then output all words that our scrambled word can unscramble to.
Hint: To see if a string `s1` is an anagram of `s2`, split both strings into arrays of letters. Sort the two arrays. If they are
equal, then they are anagrams.*/

function word_unscrambler(word, dictionary){
  var wordSplit = word.toLowerCase().split('').sort();
  var baseCase = wordSplit.join('');
  var anagram = [];
  
  for(var i = 0; i < dictionary.length; i++){
     
    var dictionarySplit = dictionary[i].split('');
    var dictionaryArrangeString = dictionarySplit.sort().join('');
    if( baseCase === dictionaryArrangeString){
     anagram.push([dictionary[i]]);  
    }
   
  }
  console.log(anagram);
}

word_unscrambler("cat", ["scatter", "tac", "ca", "act", "tca", "car", "tar", "rat"]) ;

