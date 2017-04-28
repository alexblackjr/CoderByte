/*Solved by Alexander Black Jr. on 06/19/16. Compare and update the inventory stored in a 2D array against a second 2D
array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found,
add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by
item. */
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var checkPoint = (arr2.length - 1);
    var tempBox;
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.length === 0) {
            arr1 = arr2;
            break;
        }
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                var x = arr2[i].shift();
                var y = arr1[j].shift();
                var combineResults = x + y;
                arr1[j].unshift(combineResults);
                break;
            }
            else {
                if (j === checkPoint) {
                    tempBox = arr2[i];
                    arr1.push([]);
                    var num = arr1.length;
                    arr1[num - 1].push(tempBox[0]);
                    arr1[num - 1].push(tempBox[1]);
                    break;
                }
                else {
                    continue;
                }
            }
        }
    }
    arr1.sort(function (a, b) {
        return a[1] > b[1];
    });
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);
//The function updateInventory should return an array.
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
//updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
//# sourceMappingURL=inventoryUpdate.js.map