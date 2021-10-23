// Function returning first non repearing char in input string
// If all letters repear return None or ""
// Upper and lowercase char are considered same but function returns correct case for first letter

function firstNonRepeatingLetter(s) {
  // 1. convert to array
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    // Create new array to mutate it
    let testArr = [...arr];
    // Remove testing element
    testArr.splice(i, 1);
    if (
      !testArr.includes(char.toUpperCase()) &&
      !testArr.includes(char.toLowerCase())
    ) {
      // Return first el that matches
      return char;
    }
  }
  // If went that far, means no repearing characters
  return '';
}

console.log(firstNonRepeatingLetter('moonmen'));
