/*Solved by Alexander Black on 03/03/15. Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter 
converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. */

function TimeConvert(num) { 
 
  var hour = num/60;
  hour = Math.floor(hour);
  var minutes = num % 60;
  var connect = hour + ":" + minutes;
  return connect; 
         
}

TimeConvert();  