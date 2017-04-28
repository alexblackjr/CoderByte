/*Solved by Alexander Black on 02/08/17. Write a function, `no_repeats(year_start, year_end)`, which takes a
range of years and outputs those years which do not have any repeated digits. You should probably write a helper 
function, `no_repeat?(year)` which returns true/false if a single year doesn't have a repeat.
.*/

function no_repeats(firstYear, lastYear){
 var difference = lastYear - firstYear;
 var counter = 0;
 var box = [];
 
 
  function repeatChecker(number){ //Beginning of function
    var numberSeparater = number.toString().split('');
    for(var x = 0; x < numberSeparater.length; x++){
      for(var y = 0; y < numberSeparater.length; y++){
        
        if( numberSeparater[x] === numberSeparater[y] ){
          counter += 1;
        }     
      }
         if( counter > 1 ){
           counter = 0;
           break;
         }else{
           counter = 0;
           if( x === (numberSeparater.length - 1) ){
             box.push(number);
           }
       }
   }
  }//End of function

  
  if( difference === 0 ){
    repeatChecker( firstYear );    
  }else{
    for(var i = 0; i <= difference; i++){      
      repeatChecker( firstYear );
      firstYear += 1;
    }
  }
  return box;
}

no_repeats(1960, 2012);

