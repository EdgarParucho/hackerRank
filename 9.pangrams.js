/**
 * A pangram is a string that contains every letter of the alphabet.
 * Given a sentence determine whether it is a pangram in the English alphabet. Ignore case.
 * Return either pangram or not pangram as appropriate.
 */

const s = 'We promptly judged antique ivory buckles for the next prize';

function pangram(s) {
  const alphabet = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false
  };

  let matchCounter = 0;

  for (let char of s) {
    if (alphabet[char] === false) {
      alphabet[char] = true;
      matchCounter++;
    } else if (alphabet[char.toLowerCase()] == false) {
      alphabet[char.toLowerCase()] = true;
      matchCounter++;
    }
    if (matchCounter == 26) break;
  }

  return matchCounter === 26 ? 'pangram' : 'not pangram';
}

const result = pangram(s);

console.log(result);
