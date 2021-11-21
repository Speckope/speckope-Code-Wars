// Function that gets array and n.
// Calculates maximum sum of n consecutive numbers.
// Made using Sliding Window pattern

// (T)
function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  // Our edge case
  if (arr.length < n) return null;
  // We get sum of first n numbers (our window)
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // Now we create loop where we move our window
  // i = n, so one number above nth array element
  for (let i = n; i < arr.length; i++) {
    // Now we subtract first element of existing window and add consecutive element after window!
    // This creates next window !
    console.log(tempSum);
    tempSum = tempSum - arr[i - n] + arr[i];
    console.log(tempSum);
    // Compare sum and write max to our return value
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

// for 2 numbers (M)
function maxSubarray2(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    maxSum = Math.max(maxSum, arr[i] + arr[i + 1]);
  }
  return maxSum;
}
