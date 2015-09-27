/*Solved by Alexander Black Jr. on 09/05/15. Compare two arrays and return a new array with any 
items not found in both of the original arrays. */

function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
      arr2.shift();
      --i;
      if(arr2.length === 0 && arr1.length > 0){
          newArr.push(arr1[0]); 
        }
    }else{
      arr1.splice(arr1.indexOf(arr2[i]), 1);
      arr2.shift();
      --i;
       if(arr2.length === 0 && arr1.length > 0){
          newArr.push(arr1[0]); 
        }
    }
 }
  
  return newArr;
}

diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);

