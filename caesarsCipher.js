/*Solved by Alexander Black on 01/10/16. Bonfire: Caesars Cipher:One of the simplest and most widely known 
ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are 
shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are 
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.Write a function which takes a ROT13 encoded string 
as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) { // LBH QVQ VG!
 str = str.replace(/[0-9]/g, "");
 var box = "";
  for(var i = 0; i < str.length; i++){
    var value = str.charCodeAt(i);
    if(value === 32 || value === 33 || value === 63 || value === 46){
      value = value;
    }else if(value > 77){
       value += 12;
       value = value % 90;
       value += 65;
    }else{    
       value += 13;
    } 
    box += String.fromCharCode(value);
  }
  str = box;
  return str;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");