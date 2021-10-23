/* Function that accepts a string and increments by 1 value at the end of this string
if no numerical value, add 1. Returns a string. */

function incrementString(strng) {
  // If no numbers just add 0, else it throws an error when matching
  if (!strng.match(/\d+$/)) return strng + '1';
  // 1. Get a number from string with 0s
  const number = strng.match(/\d+$/)[0];
  // 2. Get length of this number
  const numberLength = number.length;
  // 3. Convert it to Number and add 1.
  let newNumber = parseInt(number) + 1;
  // 4. Convert it to string and get length of incremented numnber
  const newNumberLength = newNumber.toString().length;
  // 5. Add missing 0 based on difference of number with 0s(number) and newNumber
  const difference = numberLength - newNumberLength;
  // If there are no 0 it just does'nt run
  for (let i = 0; i < difference; i++) {
    newNumber = '0' + newNumber;
  }
  // 6. Replace and return a number in string with a new string!
  return strng.replace(/\d+$/, newNumber);
}

// Other solutions

// One liner... ... ...
const incrementString2 = (s) => s.replace(/[0-8]?9*$/, (m) => String(++m));
// other
function incrementString3(input) {
  return input.replace(/([0-8]?)(9*)$/, function (s, d, ns) {
    return +d + 1 + ns.replace(/9/g, '0');
  });
}
