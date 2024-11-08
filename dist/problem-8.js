"use strict";
{
    function validateKeys(obj, keys) {
        for (let i = 0; i < keys.length; i++) {
            if (!(keys[i] in obj)) {
                return false;
            }
        }
        return true;
    }
    // Sample Input:
    const myPerson = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(myPerson, ["name", "age"])); // Sample Output: true
}
