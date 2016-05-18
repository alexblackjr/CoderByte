/*Solved by Alexander Black on 01/14/16.  Bonfire: Sum All Odd Fibonacci Numbers. Return the sum of all odd Fibonacci numbers up to and including
the passed number if it is a Fibonacci number. The first few numbers of the Fibonacci sequence are 
1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers. As an example, 
passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.*/

function sumFibs(num) {
   var box = [];
   var add = 0;
   var sum = 0;
   
   for(var i = 0; sum <= num; i++){
      if (num === 1) {
         box.push(1);
        return 1;
      }else if (num === 2){
        box.push(1, 1);
        return box;
      }else{       
        if(box.length < 1){
           box.push(1,1);
           i++;
        }else{
           sum = box[i - 2] + box[i - 1];
           if(sum > num){
              break;
           }else{
             box.push(sum);
           }   
        }
      }
   }
	for(var j = 0; j < box.length; j++){
     if(box[j] % 2 === 0){
        continue;
      }else{
         add += box[j];
      }
   }
  return add;
}

sumFibs(1000);// Returns 1785.