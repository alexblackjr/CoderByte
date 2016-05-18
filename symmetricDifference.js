/*Solved by Alexander Black Jr. on 05/16/16. Create a function that takes two or more arrays and returns an 
array of the symmetric difference (△ or ⊕) of the provided arrays.  Given two sets (for example set A = {1, 2, 3} 
and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are 
in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take 
(say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both 
(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).*/



function sym(args) {
 var boxScanner = [];
  
  //delete the remain of the concatenated array
   function deleteRemainingArray(boxInBoxes, row){
     boxInBoxes.splice(row, 1);
     return boxInBoxes;
   } 
  
  //extract array out of argument object
  for( var z = 0; z < arguments.length; z++ ){
    boxScanner.push(arguments[z]);
  }
  
  //check for repeating numbers
  for( var a = 0; a < boxScanner.length; a++ ){
    for( var b = 0; b < boxScanner[a].length; b++ ){
       for( var c = 1; c < boxScanner[a].length; c ++ ){
          if( boxScanner[a].length === 1 ){
            continue;
          }else{
              if( b === (boxScanner[a].length - 1) ){
                 break;
               }else if( boxScanner[a][b] === boxScanner[a][c] && b !== c ) {
                 boxScanner[a].splice(c,1);
                 c--;
               }else{
                   continue;
               }
          }     
      }
    }
  }
 
  
 //pull out common number then concat the remaining array
 for(var i = 0; i < ( boxScanner.length - 1); i++ ){
    for( var j = 0; j < boxScanner[i].length; j++ ){
            if( boxScanner[i+1].indexOf(boxScanner[i][j]) >= 0 ){
              var target = boxScanner[i+1].indexOf(boxScanner[i][j]);
              boxScanner[i+1].splice(target,1);
              boxScanner[i].splice(j,1);
              j--;
            }else{
              continue;
            }
    }
    boxScanner[i] = boxScanner[i].concat(boxScanner[i+1]);
    deleteRemainingArray(boxScanner, 1);
    i--;
   //stop loop when there are no other arrays to compare
    if( boxScanner.length === 1 ){
       break;
    }
 }
  return boxScanner[0];
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
