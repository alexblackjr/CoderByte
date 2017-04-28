/*Solved by Alexander Black on 02/08/17.  Write a function, `letter_count(str)` that takes a string and
returns a hash mapping each letter to its frequency. Do not include spaces.
.*/

function letter_count(str){
  var wordSeparate = str.split('');
  console.log( wordSeparate );
  var count = 0;
  var collection = {};
  var collectionProperty;
  
  for(var i = 0; i < wordSeparate.length; i++){
    for(var j = 0; j < wordSeparate.length; j++){
      
      if( wordSeparate[i] === wordSeparate[j] ){
        if( str.codePointAt(i) === 32 ){
          break;
        }else{
         count += 1;
        }     
      }
	  
      if(count > 0){
        collectionProperty = '"' + wordSeparate[i] + '"';
        collection[collectionProperty] = count;      
      }
    }    
    count = 0;
  }
  return collection;
}

letter_count('The most beautifulest thing in the world');

