// Function that takes two strings and returns true if characters from first string
// appear in the SAME ORDER in second string. There can be other characters between them.

// Accepts two strings
// (M)
function isSubsequence(s1, s2) {
  // 1. Check if both inputs are string, if not - return false.
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  // 2. Check if 2nd string length is at least same as first. If not, return false.
  if (s1.length > s2.trim().length) return false;
  // 3. Convert strings into array
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  // 4. Create two pointers
  let c1 = 0;
  // First pointer will be on first string, 2nd on 2nd string. They will
  // both move up when 2nd finds same character char under first pointer
  // Loop should be set up for 2nd string.
  for (let val of arr2) {
    // if val is same we increase c1!
    if (val === arr1[c1]) ++c1;
    // And here if finally c1 is equal to length of first array it means all characters were there!
    //!! WHERE THIS CHECK IN THIS LOOP MATTERS. So obvious... but took me a while.  !!
    if (c1 === arr1.length) return true;
  }
  return false;
}

// I think this one is good and quite efficient.
// I very much like what i came up with here! :)
// HOWEVER. Seems like i could do it with while loop and string.length! and not creating two new arrays...

// Other solutions :
// (T)
// This one is very similar to mine, but better.
function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// This solution is recursive!
// (T)
function isSubsequence3(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
