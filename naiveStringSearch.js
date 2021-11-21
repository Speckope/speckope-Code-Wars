function naiveStringSearch(long, short) {
  let count = 0;
  // Loop over the longer string
  for (let i in long) {
    // Loop over the shorter string
    for (let j in short) {
      i = parseInt(i);
      j = parseInt(j);
      // If the characters dont match, break out of the inner loop
      if (short[j] !== long[i + j]) {
        break;
      }
      // If the characters do match, keep going
      // If inner loop is completed and it found a match, increment the count of matcher
      if (j === short.length - 1) count++;
    }
  }
  // Return the count
  return count;
}
