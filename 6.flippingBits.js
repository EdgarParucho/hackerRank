/**
 * You will be given a list of 32 bit unsigned integers.
 * Flip all the bits (0 to 1 and 1 to 0) and return the result as an unsigned integer.
*/

function flippingBits(n) {
  const toBase2 = n.toString(2).padStart(32, 0);
  let flipped = "";
  for (let c in toBase2) flipped += (toBase2[c] == 1) ? "0" : "1";
  const equivalentDecimal = parseInt(flipped, 2);
  return equivalentDecimal;
}

const n = 9

flippingBits(n)