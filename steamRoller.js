/*Solved by Alexander Black Jr. on 03/25/16. Flatten a nested array. You must account for varying 
levels of nesting.*/

function steamroller(arr) {
 
  var container= [];
  var flatten = arr.toString();
  var buildArray = flatten.split(',');
  
  for(var i = 0; i < buildArray.length; i++){
    if(buildArray[i] === "" || buildArray[i] === " "){
      continue;
    }else if(parseInt(buildArray[i])){
      container.push(parseInt(buildArray[i]));
    }else if(buildArray[i] === "[object Object]"){
      container.push({});
    }else{
      container.push(buildArray[i]);
    }
    
  }
  
 arr = container;  
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);