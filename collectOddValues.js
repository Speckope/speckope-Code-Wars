// Function returning odd values from an input array.

function collectOddValues(arr) {
  let result = [];

  // This is our recursive helper function
  function helper(helperInput) {
    // If array is empty return(remove from call stack!)
    if (helperInput.length === 0) return; // Our base case
    // If first value in passed array is odd, push it to outer scoped result variable!
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // Regardless of oddness remove first element in passed array and recursively call helper with it.
    helper(helperInput.slice(1));
  }
  // Initiate recursive method
  helper(arr);

  return result;
}

// Other solution
// This is a 'pure recursion' solution - one function calling itself, no helpers
function collectOddValues2(arr) {
  // Every walkthrough we initiane new array
  let newArr = [];
  // Base case: chech if array is not empty
  if (arr.length === 0) {
    // This is reached in our last call
    return newArr;
  }
  // Check if first number in array is odd, if it is, push onto newArr
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // Concat created array with call on collectNewValues with arg as newArr with rremoved 1st el
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  // This is reached after last is returned in if statement when arr.length === 0
  return newArr;
}
