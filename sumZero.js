// Function returnning first pair of numbers in an array that sums up to 0
// This is done using multiple pointers pattern!
// This is for sorted arrays!

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  // this is check is so it doesnt return a pair when pairs meet at 0
  while (left < right) {
    let sum = arr[left] + arr[right];
    // if sums up to zero return a pair
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // if sum>0 we want previeus numbner from right(bs its sorted array)
      right--;
    } else {
      // if its less we want to increase number on left
      left++;
    }
  }
}
