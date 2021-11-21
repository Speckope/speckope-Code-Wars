// Function that given sorted array of numbers and target number determines whether
// in given array there is a pair of numbers which average equals target number.
// Returns true if there is, false if not.

// We get two inputs: array and target number
// (M)
function averagePair(array, tN) {
  // If we recive empty array or with less than 2 numbers, return false.
  if (array.length < 2) return false;
  // 1. Find point where number in an array exceeds 2x average and slice it. No need to loop over it.
  const arr = array.filter((el) => el < tN * 2);
  // 2. Create two pointers. One at the start, one at the end.
  let [c1, c2] = [0, arr.length - 1];
  // 3. Loop through an array and check whether there are two numbers which average gives tN
  while (c1 < c2) {
    // Calculate average
    let ave = (arr[c1] + arr[c2]) / 2;
    // Return true if our numbers are the average
    if (ave === tN) {
      return true;
      // We have biggest and smallest numbers average.
      // So if if this average is less than target, we want to increase it! So we increase smallest number!
    } else if (ave < tN) {
      c1++;
      // If average is higher, we want to lower it! So go to previous number!
    } else c2--;
  }
  return false;
}
// This one was hard, but I understood the idea of multiple pointers pattern
// To not loop through everything, we need checks inside loop that will increase
// our pointers depending on logical conditions.
// At the beginning i couldn't get how to do this without one pointer looping over stand-stil other.

// Other solution: (T)
function averagePair2(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
