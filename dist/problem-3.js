"use strict";
{
    function countWordOccurrences(sentence, word) {
        let sentenceLow = sentence.toLowerCase();
        let sentenceLowArr = sentenceLow.split(" ");
        let wordLow = word.toLowerCase();
        let count = 0;
        for (let i = 0; i < sentenceLowArr.length; i++) {
            if (wordLow === sentenceLowArr[i]) {
                count++;
            }
        }
        return count;
    }
    // Sample Input:
    console.log(countWordOccurrences("I love typescript typescript typescript", "typescript"));
    // Sample Output:
    // 1;
}
