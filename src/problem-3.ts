{
function countWordOccurrences(sentence:string,word:string) {
    let sentenceLow : string = sentence.toLowerCase()
    let sentenceLowArr = sentenceLow.split(" ")
    let wordLow : string= word.toLowerCase()
    let count:number=0;

    for (let i = 0; i < sentenceLowArr.length; i++) {
         if (wordLow === sentenceLowArr[i]) {
            count ++;
         }
        
    }
return count;    
}


// Sample Input:
console.log(countWordOccurrences("I love typescript typescript typescript", "typescript"))

// Sample Output:
// 1;
}