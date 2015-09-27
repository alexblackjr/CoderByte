/*Solved by Alexander Black Jr. on 09/14/15. DNA Pairing - The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [['G', 'C'], ['C','G'],['G', 'C']]
The charater and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pair(str) {
   var input = str.split('');
  var collection = [];
  
  for(var i = 0; i < input.length; i++){
    if(input[i] === "A"){
      collection.push([]);
      collection[i].push(input[i]);
      collection[i].push("T");
    }else if(input[i] === "T"){
      collection.push([]);
      collection[i].push(input[i]);
      collection[i].push("A");
    }else if(input[i] === "G"){
      collection.push([]);
      collection[i].push(input[i]);
      collection[i].push("C");
    }else{
      collection.push([]);
      collection[i].push(input[i]);
      collection[i].push("G");
    }
  }str = collection ;
  
 return str;
}

pair("GCG");
