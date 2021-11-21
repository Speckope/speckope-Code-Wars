// Function accepring variable numbe rof argumnets and returning
// true if there are duplicates, and false when there aren't

// O(n) space and time complexity (M). Frequency Counter
function areThereDuplicates(...args) {
  // 1. Get multiple arguments and transform them info an array
  // Can be done with spread operator(we get an array) or Aray.from(arguments);
  //
  // 2. Create an obj that counts nu,ber any value is or creates key for new value.
  let helperObj = {};
  for (let val of args) {
    helperObj[val] ? (helperObj[val] += 1) : (helperObj[val] = 1);
  }
  // 3. Loop through an object and see if there are any values that are above 1;
  for (let key in helperObj) {
    if (helperObj[key] > 1) return true;
  }
  return false;
}

function areThereDuplicates2(...args) {
  // Two pointers
  // We sort an arrray!
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  // We move in window of size of 2!
  // This is beacouse we sorted an array and same values are right next to each other
  while (next < args.length) {
    // And we compare this next to each other values
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// One Liner solution (T)
function areThereDuplicates3() {
  // We create new Set( this is data collection of UNIQUE values, there are NO DUPLICATES )
  // So what we do here is:
  // 1. Create new set from arguments - it will ELIMINATE DUPLICATE ARGUMENTS.
  // 2. Compare Set size to arguments length. If those values are not same, it means we had duplicates that were eliminated when creating a Set!
  return new Set(arguments).size !== arguments.length;
  // Great!
}
