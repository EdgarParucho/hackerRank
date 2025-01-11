/**
 * Given five positive integers, find the minimum and maximum values that can be calculated
 * by summing exactly four of the five integers. Then print the respective minimum and maximum
 * values as a single line of two space-separated long integers.
 */

function minMaxSum(arr) {
  let lowest = null;
  let biggest = null;
  const sum = arr.reduce((acc, num) => {
    if (num < lowest || lowest == null) lowest = num;
    if (num > biggest || biggest == null) biggest = num;
    return acc + num;
  }, 0)
  const min = sum - biggest;
  const max = sum - lowest;
  console.log(min, max);  
}

const arr = [1, 3, 5, 7, 9];

minMaxSum(arr);