/**
 * There is a collection of input strings and a collection of query strings.
 * For each query string, determine how many times it occurs in the list of input strings.
 * Return an array of the results.
*/

const strings = ['ab', 'abc', 'ab'];
const queries = ['abc', 'ab', 'bc'];

function matchingStrings(strings, queries) {
  const matchCounter = Object.fromEntries(queries.map(q => [q, 0]));
  for (let string of strings) if (matchCounter[string] != undefined) matchCounter[string]++;
  return queries.map(q => matchCounter[q]);
}

const result = matchingStrings(strings, queries);

console.log(result);
