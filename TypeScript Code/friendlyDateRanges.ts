/*Solved by Alexander Black Jr. on 06/25/16. Convert a date range consisting of two dates formatted as YYYY-MM-DD into
a more readable format. The friendly display should use month names instead of numbers and ordinal dates instead of
cardinal (1st instead of 1). Do not display information that is redundant or that can be inferred by the user: if the
date range ends in less than a year from when it begins, do not display the ending year. Additionally, if the date range
begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be
displayed at the beginning of the friendly range. If the range ends in the same month that it begins, do not display
the ending year or month. Examples:

 makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

 makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"] */

function makeFriendlyDates(arr:[string]) {
    var firstMonth: number = parseInt( arr[0].substr(5,2) ) - 1,
        secondMonth: number = parseInt( arr[1].substr(5,2) ) - 1,
        firstYear: number = parseInt( arr[0].match(/\d{4}/) ),
        secondYear: number = parseInt (arr[1].match(/\d{4}/) ),
        firstDay: number = parseInt( arr[0].substr(8,2) ),
        secondDay: number = parseInt( arr[1].substr(8,2) ),
        year: number = secondYear - firstYear,
        date: string = '',
        value: Array<string> = [],
        monthNames: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (var i = 0; i < monthNames.length; i++) {
        //sets the first month of the date range and the day
        if (firstMonth === i) {
            date = monthNames[i] + " " + firstDay;

            //sets the ordinal indicator
            if ((arr[0].substr(8, 1) === '0' || arr[0].substr(8, 1) > '1') && (parseInt(arr[0].substr(9, 1)) === 1)) {
                date += 'st';
            }else if ((arr[0].substr(8, 1) === '0' || arr[0].substr(8, 1) >= '2') && (parseInt(arr[0].substr(9, 1)) === 2)) {
                date += 'nd';
            }else if ((arr[0].substr(8, 1) === '0' || arr[0].substr(8, 1) >= '2') && (parseInt(arr[0].substr(9, 1)) === 3)) {
                date += 'rd';
            }else{
                date += 'th';
            }//if the date ranges are the same date, add the year, push the value, and break out of loop
            if( arr[0] === arr[1] ){
                date += ', ' + firstYear;
                value.push(date);
                break;
            }//checks the length of time between the two dates
            if( year === 0 && ( (secondMonth - firstMonth) === 0 ) ){//same year, same month
                value.push(date);
            }//year difference greater than 1 or year difference equals 1 but same month and time is less than a year
            else if (year > 1 || (year === 1 && ( secondMonth - firstMonth ) === 0 ) && ( ( secondDay - firstDay ) < 0 ) ) {
                date += ', ' + firstYear;
                value.push(date);
            }//same year, different month or different year, less than a year, same month
            else if( ( year === 0 && ( secondMonth - firstMonth ) > 0 ) || ( year === 1 && ( secondMonth - firstMonth ) === 0 ) ){
                date += ', ' + firstYear;
                value.push(date);
            }else{
                value.push(date);
            }//sets the day for the second part of the date range array if the ranges are in the same year and month. sets the ordinal
            // indicator and pushes the date value
            if (secondMonth === firstMonth && year === 0) {
                date = '' + secondDay;

                if ((arr[1].substr(8, 1) === '0' || arr[1].substr(8, 1) > '1') && (parseInt(arr[1].substr(9, 1)) === 1)) {
                    date += 'st';
                }else if ((arr[1].substr(8, 1) === '0' || arr[1].substr(8, 1) >= '2') && (parseInt(arr[1].substr(9, 1)) === 2)) {
                    date += 'nd';
                }else if ((arr[1].substr(8, 1) === '0' || arr[1].substr(8, 1) >= '2') && (parseInt(arr[1].substr(9, 1)) === 3)) {
                    date += 'rd';
                }else{
                    date += 'th';
                }
                value.push(date);
            }else{
                //sets the month for the second part of the date range array and sets the ordinal indicator
                for (var j = 0; j < monthNames.length; j++) {
                    if (secondMonth === j) {
                        date = monthNames[j] + ' ' + secondDay;
                        if ((arr[1].substr(8, 1) === '0' || arr[1].substr(8, 1) > '1') && (parseInt(arr[1].substr(9, 1)) === 1)) {
                            date += 'st';
                        }else if ((arr[1].substr(8, 1) === '0' || arr[1].substr(8, 1) >= '2') && (parseInt(arr[1].substr(9, 1)) === 2)) {
                            date += 'nd';
                        }else if ((arr[1].substr(8, 1) === '0' || arr[1].substr(8, 1) >= '2') && (parseInt(arr[1].substr(9, 1)) === 3)) {
                            date += 'rd';
                        }else{
                            date += 'th';
                        }
                    }else{
                        continue;
                    }//checks if the date ranges are less than a year and breaks out of second loop
                    if( ( year === 1 && ( (secondMonth - firstMonth) < 0 ) ) || ( year === 1 && ( secondMonth - firstMonth ) === 0 ) && (
                        ( secondDay - firstDay ) < 0 ) ){
                        value.push(date);
                        break;
                    }else if (year > 0) {
                        date += ', ' + secondYear;
                        value.push(date);
                        break;
                    }else{
                        value.push(date);
                        break;
                    }//end 2nd if
                }//end 1st if
            }//end for
            break; //breaks outer for
        }//end initial if
    }//end 1st for


    return value;
}


makeFriendlyDates(["2016-07-01", "2016-07-04"]); //should return ["July 1st","4th"].
//makeFriendlyDates(["2016-12-01", "2017-02-03"]); //should return ["December 1st","February 3rd"].
//makeFriendlyDates(["2016-12-01", "2018-02-03"]); //should return ["December 1st, 2016","February 3rd, 2018"].
//makeFriendlyDates(["2017-03-01", "2017-05-05"]); //should return ["March 1st, 2017","May 5th"]
//makeFriendlyDates(["2018-01-13", "2018-01-13"]); //should return ["January 13th, 2018"].
//makeFriendlyDates(["2022-09-05", "2023-09-04"]); //should return ["September 5th, 2022","September 4th"].
//makeFriendlyDates(["2022-09-05", "2023-09-05"]); //should return ["September 5th, 2022","September 5th, 2023"].
