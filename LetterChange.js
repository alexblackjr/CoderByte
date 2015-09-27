/*Solved by Alexander Black Jr. on 01/25/15. Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
 Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */
 
 function LetterChanges(str) { 

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var vowel = ['a','e','i','o','u'];
  var separate = str.split("");
  var reconnect = [];;
  for(var x = 0; x < separate.length; x++){
      if(separate[x] == " "){
           reconnect.push(' ');
          }
          for(var j = 0; j < alphabet.length; j++){
              if(separate[x] == alphabet[j]){
                   reconnect.push(alphabet[j+1]);
                   for(var a = 0; a < reconnect.length; a++){
                      for(var b = 0; b < vowel.length; b++){
                          if(reconnect[a] == vowel[b]){
                              reconnect[a] = vowel[b].toUpperCase();
                              
                          }//if
                      }//for
                   }//for
              }//if
           }
   }str = reconnect.join(''); 
    return str;

}

LetterChanges();           
