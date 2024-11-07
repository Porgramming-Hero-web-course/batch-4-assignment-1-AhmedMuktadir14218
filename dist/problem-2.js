"use strict";
{
    function removeDuplicates(inputArray) {
        let emptyArray = [];
        for (let i = 0; i < inputArray.length; i++) {
            if (emptyArray.indexOf(inputArray[i]) === -1) {
                emptyArray.push(inputArray[i]);
            }
        }
        return emptyArray;
    }
    // Sample Input:
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    // Sample Output:
    // [1, 2, 3, 4, 5]
}
