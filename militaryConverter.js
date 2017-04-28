/*Solved by Alexander Black on 04/23/17. Given a time in 12-hour AM/PM format, convert it to 
military (24-hour) time. Note: Midnight is  12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour 
clock. Noon is  12:00:00PM on a 12-hour clock, and  12:00:00 on a 24-hour clock.*/

function militaryCoverter(clock) {
    var time = clock;
    var removeMeridiem;
    if( time.substr(0, 2) == "12" && time.toLowerCase().indexOf('p') > -1 ){
        removeMeridiem = time.substr(0, 8);
        console.log(removeMeridiem);
    }else if(time.toLowerCase().indexOf('p') > -1){
        var hour = parseInt( time.substr(0, 2) );
        var minSec = time.slice(2, 8)
        var militaryHour = hour + 12;
        console.log(militaryHour + minSec);
    }else if( time.substr(0, 2) == "12" && time.toLowerCase().indexOf('a') > -1 ) {
        var zeroHour = "00";
        var minSec = time.slice(2, 8)
        console.log( zeroHour + minSec );
    }else{
        removeMeridiem = time.substr(0, 8);
        console.log(removeMeridiem);
    }

}

militaryCoverter( "12:45:54PM" );

