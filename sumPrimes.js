/*Solved by Alexander Black on 01/15/16. Bonfire: Sum All Primes. Sum all the prime numbers up to and including 
the provided number. A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a 
prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
The provided number may not be a prime.*/

function sumPrimes(num) { 
  var add = 0;
  var box = [];
  for(var i = 2; i <= num; i++){
    for(var j = 2; j <= num; j++){
        if(i % j === 0 && i / j > 1){
           break;
        }else if(i % j === 0 && i / j === 1){
          box.push(i);
          add += i;
        }else{
          continue;
        } 
    } 
 } 
   return add;
}

sumPrimes(977); //Returns 73156
