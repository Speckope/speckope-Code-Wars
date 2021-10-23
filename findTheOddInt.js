//function that finds an integer appearing odd number of times
function findOdd(A) {
  // 1. We can can loop through and array and
  // for each new element we find filter this array for this element
  // then get new array and count how many times it is there!
  // As there is only one odd we may end execution of loop when we find it!
  let oddOne = null;

  A.forEach((el) => {
    const filteredArr = A.filter((e) => e === el);
    if (filteredArr.length % 2 !== 0) {
      oddOne = el;
    }
  });

  // Generally i think it is good, however if we used custom for loop
  // we would be able to first write the oddOne and then break from the loop!
  // This is due to hard time breaking from forEach

  return oddOne;
}

// Other people solutions:
// The oneliner. Its using XOR operator.
// Good explanation of this in comments to this sollution
// basically A ^ A = 0 ( ex: 10 ^ 10 = 0 ) AND A ^ 0 = A so in the end it returns odd one
const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd2(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}
