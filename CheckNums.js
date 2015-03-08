/*Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, 
otherwise return the string false. If the parameter values are equal to each other then return the string -1. */

function CheckNums(num1,num2) { 

  // code goes here  
  if(num1 < num2){
    return true;
  }else if(num1 == num2){
    return '-1';
  }else{
    return false;
  }
 
  return num1 + num2; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CheckNums(readline());   