/**
 * Given a square matrix, calculate the absolute difference
 * between the sums of its diagonals. 
 */

const arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

function diagonalDifference(arr) {
	let arrLength = arr.length;
	let increasingIndex = 0;
	let decreasingIndex = arrLength - 1 - increasingIndex;
	let diagonalOneSum = 0;
	let diagonalTwoSum = 0;

	do {
		diagonalOneSum += arr[increasingIndex][increasingIndex] + arr[decreasingIndex][decreasingIndex];
		diagonalTwoSum += arr[decreasingIndex][increasingIndex] + arr[increasingIndex][decreasingIndex];
		increasingIndex++;
		decreasingIndex--;
	} while (increasingIndex <= decreasingIndex)

	let absoluteDifference = Math.abs(diagonalOneSum - diagonalTwoSum);

	return absoluteDifference;
}

const result = diagonalDifference(arr);

console.log(result);