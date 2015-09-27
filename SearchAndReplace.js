/*Solved by Alexander Black Jr. on 09/05/15. Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on. Second argument is the word that 
you will be replacing (before). Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace 
the word 'Book' with the word 'dog', it should be replaced as 'Dog' */

function replace(str, before, after) {
 if(arguments[1].match(/[A-Z]/)){
    var box = arguments[2].split('');
    box[0] = box[0].toUpperCase();
    arguments[2] = box.join('');
    str = str.replace(arguments[1],arguments[2]);
  }else{
    str = str.replace(arguments[1],arguments[2]);
  }
   
 return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
