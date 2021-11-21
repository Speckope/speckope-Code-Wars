// My own implementation

// Accepts a sorted array and a value
function binarySearch(arr, val) {
  // Create a left pointer at the start of the array
  let p1 = 0;
  // and right pointer at the end of the array.
  let p2 = arr.length - 1;
  // Create a pointer in the middle
  let p3 = Math.floor((p1 + p2) / 2);
  // While left pointer comes before the right pointer:
  while (arr[p3] !== val && p1 <= p2) {
    p3 = Math.floor((p1 + p2) / 2);
    // If the value is too small, move the left pointer up
    if (arr[p3] < val) p1 = p3 + 1;
    // If the value is too large, move the right pointer up
    if (arr[p3] > val) p2 = p3 - 1;
    // If you find value you want, return the index
    if (arr[p3] === val) return p3;
  }
  if (arr[p3] === val) return p3;
  // If value is never found, return -1

  return -1;
}

binarySearch([1, 2, 3, 4, 5], 3);
