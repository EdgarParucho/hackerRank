/**
 * There are two n-element arrays of integers, A and B.
 * Permute them into some A' and B' such that the relation
 * A'[i] + B'[i] >= k holds for all where 0 <= i < n.

  There will be q queries consisting of A', B', and k.
  For each query, return YES if some permutation A', B'
  satisfying the relation exists. Otherwise, return NO. 
 */


function twoArrays(k, A, B) {
  const increasingA = A.sort((a, b) => a - b);
  const decreasingB = B.sort((a, b) => b - a);
  for (let i in increasingA) if ((increasingA[i] + decreasingB[i]) < k) return "NO"
  return "YES";
}

const k = 10;
const A = [2, 1, 3];
const B = [7, 8, 9];

const result = twoArrays(k, A, B);

console.log(result);
