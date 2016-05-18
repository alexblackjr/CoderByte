/*Solved by Alexander Black Jr. on 03/26/16. Return an English translated sentence of the passed binary string.
The binary string will be space separated.*/

function binaryAgent(str) {
  var makeArray = str.split(' ');
  var phrase = "";
  
  for(var i = 0; i < makeArray.length; i++){
    var num = parseInt(makeArray[i],2);
    var output = String.fromCharCode(num);
    phrase += output;
  }
  str = phrase;
  
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
