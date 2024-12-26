/*
    Given an array of integers, calculate the ratios of its elements
    that are positive, negative, and zero. Print the decimal value of
    each fraction on a new line with 6 places after the decimal.
*/

const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    let n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    arr.forEach(n => {
        if (n > 0) positiveCount++;
        else if (n < 0) negativeCount++;
        else zeroCount++;
    });

    console.log((positiveCount / n).toFixed(6));
    console.log((negativeCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));
    
}

plusMinus(arr);