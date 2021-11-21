// Function that takes array of positive integers and positive integer
// and returns subarray of contigous passed array of minimal length thats sum is
// equal or greater than passed integer

function minSubArrayLen(arr, n) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (sum < n && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= n) {
      minLen = Math.min(minLen, end - start);
      sum = sum - arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen !== Infinity ? minLen : 0;
}

function minSubArrayLen2(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
