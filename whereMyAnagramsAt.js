function anagrams(word, words) {
  // Get word and sort it.
  word = word.split('').sort().join('');

  // Filter words array sorting every el like word.
  return words.filter((el) => {
    // if it matches, add it to return object
    if (el.split('').sort().join('') === word)
      // Add to return object if they match
      return true;
  });
}
