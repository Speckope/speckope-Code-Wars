// Function accepting a string and returning length of the longest substring with all unique characters

// IT WORKS xd (M)
function findLongestSubstring(str) {
  let [start, end] = [0, 0];
  let maxLen = 0;
  // 1. Convert to an array
  let arr = str.split('');
  let set;
  // 2. While loop, use set to determine uniqueness
  while (start < arr.length) {
    set = new Set(arr.slice(start, end));
    // 3. start from 0, if string is unique, extend window
    if (set.size === end - start && end < arr.length) {
      end++;
      let test = new Set(arr.slice(start, end));
      if (test.size === end - start) {
        // 3.5 compare maxLen
        maxLen = Math.max(maxLen, end - start);
      }
    }
    // 4. If string isn't unique, shrink window(from left)
    else if (set.size !== end - start) {
      start++;
      // 5. Break if something
    } else break;
  }
  return maxLen;
}

// (T) solution : keeping track of our characters and sliding window!!!
// Great!
function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // If char was already meet in string
    if (seen[char]) {
      // We move beginning of our window to where this character was!!
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    // If no char in string we increale our longer counter!!
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
