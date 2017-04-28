/*Solved by Alexander Black Jr. on 06/17/16. Design a cash register drawer function checkCashRegister() that accepts
purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the
third argument. cid is a 2D array listing available currency. Return the string "Insufficient Funds" if cash-in-drawer
is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due. Otherwise, return
change in coin and bills, sorted in highest to lowest order. */

(function () {'use strict';}());

function checkCashRegister(price: number, cash: number, cid: any) :any {
    let totalCid: number = 0,
        change: number = cash - price,
        valueCompare: number[] = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01],
        amountOfEach: any = {},
        howMany:number = 0,
        getBack = [],
        first: number = 0,
        reverseMoneyOrder: [string, number]= arguments[2].reverse(),
        exactDrawer: string,
        remainingBalance: number,
        returnedAmount: any [];


    //Cut off extra decimals
    function twoDecimals (z:number) :string {
        var strTotal: string = Math.fround(z).toString();
        var findDecimal: number = strTotal.indexOf(".");
        var cutoffPoint: number = findDecimal + 3;
        if( parseInt(strTotal.substr(cutoffPoint,1)) >= 5){
            var num: number  = parseInt( strTotal.substr(cutoffPoint - 1,1) );
            num += 1;
            var injectNum: string = num.toString();
            var lastDigitSeen: number = cutoffPoint - 1;
            var shortNum = strTotal.replace(strTotal[lastDigitSeen], injectNum);
            return shortNum.substr(0,cutoffPoint);
        }else{
            return strTotal.substr(0,cutoffPoint);
        }
    }

    //fill amountOfEach object for cash drawer break down
    for(var a = 0; a < arguments[2].length; a++){
        howMany = Math.ceil( (reverseMoneyOrder[a][1] / valueCompare[a]) );
        amountOfEach[ reverseMoneyOrder[a][0] ] =  howMany;
    }

    //total of the drawer
    for(var i = 0; i < reverseMoneyOrder.length; i++){
        totalCid += reverseMoneyOrder[i][1];
    }
    exactDrawer = twoDecimals(totalCid);

    for(var j = 0; j < reverseMoneyOrder.length; j++){
        change = parseFloat( twoDecimals(change) );
        if( ( parseFloat(exactDrawer) - change) < 0 ){
            return "Insufficient Funds";
        }else if( ( parseFloat(exactDrawer) - change ) > 0 ){
            if( (change % valueCompare[j]) < change){
                getBack.push([]); //creates empty array for input
                getBack[first].push( reverseMoneyOrder[j][0] );  //push currency value

                var amountOfThisCurrency = amountOfEach[ reverseMoneyOrder[j][0] ]; //amount of the currency value in the drawer

                var amountNeeded = Math.floor( change / valueCompare[j] ); //amount of highest currency values needed

                //compare drawer to get back change in highest bill order
                if( amountNeeded > amountOfThisCurrency ){
                    getBack[first].push( valueCompare[j] * amountOfThisCurrency );
                    remainingBalance =  change - (valueCompare[j] * amountOfThisCurrency);
                    change = remainingBalance;
                    amountOfEach[ reverseMoneyOrder[j][0] ] = 0;
                }else{
                    getBack[first].push( valueCompare[j] * amountNeeded );
                    remainingBalance = change - (valueCompare[j] * amountNeeded);
                    change = remainingBalance;
                    amountOfEach[ reverseMoneyOrder[j][0] ] =  ( amountOfThisCurrency - amountNeeded );
                }
                first++;
            }
            if( (j === reverseMoneyOrder.length - 1 ) && (change % valueCompare[j]) < change ){
                return "Insufficient Funds";
            }
        }else if( (parseFloat(exactDrawer) - change) === 0 ) {
            return "Closed";
        }else{
            continue;
        }
    }

    returnedAmount = getBack;
    return returnedAmount;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return a string.
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return a string.
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); //should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return "Insufficient Funds".
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return "Insufficient Funds".
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Closed".

