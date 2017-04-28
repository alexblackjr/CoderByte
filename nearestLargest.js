/*Created by Alexander Black Jr. on 02/3/17. Write a function, `nearestLargest(arr, i)` which takes an 
array and an index.  The function should return another index, `j`: this should satisfy:
	(a) `arr[i] < arr[j]`, AND
	(b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j2]`.
In case of ties (see example below), choose the earliest (left-most) of the two indices. If no number in 
`arr` is larger than `arr[i]`, return `nil`.
*/

function nearest_larger(arr, x){
  var box = [];
  var difference = 0;
  
  for(var i = 0; i < arr.length; i++){
    if( (arr[i] > arr[x]) ){
          box.push( arr[i] );
        }    
 }
  console.log( 'Box is ' + box + ' and the length of box is ' + box.length);
  
  
  if( box.length === 0 ){
    console.log('nil');
  }else if( box.length === 1 ){
    difference =  arr.indexOf(box[0]);
    console.log( difference );
  }else{
     difference = box[0];
     for(var j = 0; j < box.length -1; j++){
        if(  difference < box[j + 1] ){
          console.log( 'true gives us ' + difference );         
          
        }else{
          console.log( 'false gives us ' + (box[j + 1] - arr[x]) );
          difference = box[j + 1];          
        }
    }
    console.log( arr.indexOf(difference) );
  }
       
 
}

nearestLargest([2, 6, 9, 4, 8], 3);

