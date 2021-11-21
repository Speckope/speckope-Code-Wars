// Function counting unique vales in sorted array.
// It's based on multiple pointers pattern

function countUniqueValues(arr) {
  // We are accepting and array
  // Create two pointers thats will be moving from the beginning
  // Return 0 if array is empty
  if (arr.length === 0) return 0;
  let c1 = 0;
  let c2 = 1;

  while (c2 <= arr.length - 1) {
    // If not same - move counter c1 up, write value under c2 there and ncrease c2
    if (arr[c1] !== arr[c2]) {
      c1 += 1;
      arr[c1] = arr[c2];
      c2 += 1;
    }
    // If values are same - increase c2 counter
    if (arr[c1] === arr[c2]) {
      c2 += 1;
    }
  }
  // Function returns number of unique values, which will be c1 + 1
  return c1 + 1;
}

// Other solution
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
