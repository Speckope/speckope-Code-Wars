// Function checking whether two given positive integers have same frequency of each digit.
// Input is 2 numbers as primitives
// Time complexity: O(N)

function sameFrequency(n1, n2) {
  // Overally i want to create two objects on which i will compare entries.
  //
  // 1. Convert numbers to arrays of strings
  /* Array.from() creates array from an iterable object. String() will convert number to string.   
   If we wanted array of numbers we could write Array.from(String(n1), Number). 
   Then output of String(n1) (single string character!) would be piped into Number, convert it 
   to Number and then made an array from it */
  let arr1 = Array.from(String(n1));
  let arr2 = Array.from(String(n2));
  // Return false if arrays are not same length
  if (arr1.length !== arr2.length) return false;
  // 2. Loop over each array and create an object that will have digit as key and number of times it appears as value
  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] ? (obj1[val] += 1) : (obj1[val] = 1);
  }
  for (let val of arr2) {
    obj2[val] ? (obj2[val] += 1) : (obj2[val] = 1);
  }
  // 3. Compare two objects, if any entry is not same, return error
  for (let key in obj1) {
    // If key and it's value in obj2 is not we return false. Also will return false if does not find key
    if (obj1[key] !== obj2[key]) return false;
  }
  // !!!
  // We would have to do it, if we didn't checked for arrays length! It passed in test without it, we limit
  // our loop above to object one, so objects can have
  // one same entry but 2nd can have more and it would not be accounted for it!
  // !!!
  //   for (let key in obj2) {
  //     // If key and it's value in obj2 is not we return false. Also will return false if does not find key
  //     if (obj2[key] !== obj1[key]) return false;
  //   }

  // If all good, return true
  return true;
}
