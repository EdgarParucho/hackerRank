/**
 * Given an array of integers, where all elements but one occur twice,
 * find the unique element. 
 */

const a = [1, 2, 3, 4, 3, 2, 1]

function lonelyinteger(a) {
    let unique = 0;
    a.reduce((acc, int) => {
        if (acc[int] == undefined) {
            acc[int] = true;
            unique += int;
        } else {
            acc[int] = undefined;
            unique -= int;
        }
        return { ...acc }
    }, {}) ;
    return unique;
}

console.log(lonelyinteger(a))