/*Solved by Alexander Black Jr. on 03/08/15. Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
For the test cases, the range will be between 1 and 18. */

function FirstFactorial(num) { 

  // code goes here  
  if(num === 0){
    return 1;
  }else if(num < 0){
    console.log("Error! Please input a positive number.")
  }else{
	  num *= FirstFactorial(num-1)
  }
  console.log(num);
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(5);           
