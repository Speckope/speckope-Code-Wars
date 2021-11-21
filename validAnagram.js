// Function that checks whether two given strings are anagrams
// Inputs are two strings
// Outputs can be determined from inputs
// I will use Frequency Counter pattern for efficient O(n) without nested loops
function validAnagram(str1, str2) {
  // First we can check if given strings are same length. Return false if not.
  if (str1.length !== str2.length) return false;
  // Overally i want to save values in an aray to an object and compare if they have same entries
  // Convert strings to arrays
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const obj1 = {};
  const obj2 = {};
  // Loop through each array and save its items to key and number this items appears to objects value\
  arr1.forEach((el) => {
    if (obj1[el]) {
      obj1[el] += 1;
    } else {
      obj1[el] = 1;
    }
  });
  arr2.forEach((el) => {
    if (obj2[el]) {
      obj2[el] += 1;
    } else {
      obj2[el] = 1;
    }
  });
  // Can't compare this objects through stringify(idk the efficiency), beacouse order matters in this method.
  // Other solution to compare is to use lodash as it quits once it encounters false,
  // I will compare keys and values in for in loop and if some are not equal, return false
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
  // Otherwise, return true!
}

// Another solution is to create one object, then loop over 2nd string and subtract for every letter in string value in object
// then if no obj[key] return false. otherwise loop goes through and returns true

// Other solution:
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
