/*Solved by Alexander Black Jr. on 09/24/15. Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a 
simple for loop, and access each member with array syntax arr[i] .*/

function largestOfFour(arr) {
  var box = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] < arr[i][j + 1]){
        arr[i].shift();
        --j;
        if(arr[i].length === 1){
          box.push(+arr[i]);
          break;
        }
      }else{
        arr[i].splice(j+1,1);
        --j;
        if(arr[i].length === 1){
          box.push(+arr[i]);
          break;
        }
      }
    }
  }arr = box;
  return arr;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");
