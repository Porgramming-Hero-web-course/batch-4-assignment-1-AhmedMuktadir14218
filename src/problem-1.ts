{
// Sample Input:


function sumArray(inputArray:number[]) {
    let sum : number= 0;

    for (let i = 0; i < inputArray.length; i++) {
         sum = sum + inputArray[i];
        
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]))

// Sample Output:
// 15;
}