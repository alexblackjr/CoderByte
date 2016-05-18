/*Created by Alexander Black Jr. on 09/07/15. Convert the given number into a roman numeral. All roman 
numerals answers should be provided in upper-case.*/

function convert(num) {
  var input = num.toString();
  var out = input.split('');
  var one = 'I';
  var four = 'IV';
  var five = 'V';
  var nine = 'IX';
  var ten = 'X';
  var sum = '';
  var difference = 0;
  
  for(var i = 0; i < +out[0]; i++){
        if(num >= 10){
          sum += ten;
        }else if(num === 9){
          sum += nine;
          i = 8;
        }else if(num === 5){
          sum += five;
          i = 4;
        }else if(num === 4){
          sum += four;
          i = 3;
        }else if(num > 5 && num < 9){
          sum = five;
          difference = (+out[0]) - 5;
          for(var j = 0; j < difference; j++){
              sum += one;
          }
        }else{
          sum += one;
        }
   }
 
  if(+out[1]){
      if((+out[1]) < 9 && (+out[1]) < 4){
            for(var k = 0; k < (+out[1]); k++){
                    sum += one;
             }
          }else if((+out[1]) === 4){
                sum += four;
          }else if((+out[1]) === 5){
                sum += five;
          }else if((+out[1]) > 3 && (+out[1]) < 9){
                sum += five;
                difference = (+out[1]) - 5;
                for(var l = 0; l < difference; l++){
                    sum += one;
                 }
          }else{
                sum += nine;
          }
}
  num = sum;
  console.log(num);
  return num;
}

convert(36);