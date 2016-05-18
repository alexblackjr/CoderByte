/*Solved by Alexander Black Jr. on 03/31/16. Create a function that sums two arguments together. If only one 
argument is provided, then return a function that expects one argument and returns the sum. For example, 
add(2, 3) should return 5, and add(2) should return a function. Calling this returned function with a single 
argument will then return the sum: var sumTwoAnd = add(2); sumTwoAnd(3) returns 5. If either argument isn't a 
valid number, return undefined.*/

function add() {
  var firstArg = arguments[0];
 
  if(arguments.length === 1 && !(isNaN(firstArg)) ){
       return function (y){
           if(typeof(y) !== 'number'){
             return undefined;
           }
                  return firstArg + y;
            };
  }else if(typeof(firstArg) === 'number' && typeof(arguments[1]) === 'number'){
    return firstArg + arguments[1];
  }else{
    return undefined;
  }
  
   
}

add(2,3);