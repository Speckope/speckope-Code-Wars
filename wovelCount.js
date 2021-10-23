function getCount(str) {
  var vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'i' ||
      str[i] == 'u' ||
      str[i] == 'e' ||
      str[i] == 'o'
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// best practice
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
