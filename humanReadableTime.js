// Function that takes time in seconds and returns it in HH:MM:SS format
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// Mine refactored :
function humanReadablePlus(seconds) {
  // Create an array which we will write to and join later
  let arr = ['00', '00', '00'];

  arr[0] = Math.floor(seconds / 3600);
  arr[1] = Math.floor((seconds % 3600) / 60);
  arr[2] = seconds % 60;

  // Add 0 before number if length is less than 2
  arr.forEach((el, i) => {
    if (el.toString().length < 2) arr[i] = '0' + el;
  });
  return arr.join(':');
}

function humanReadable(seconds) {
  // Create an array which we will write to and join later
  let arr = ['00', '00', '00'];
  // Lets make 3 cases, when < 60, less < 24h and bigger
  if (seconds < 60) {
    arr[2] = seconds;
  }
  if (seconds >= 60 && seconds < 3600) {
    arr[1] = Math.floor(seconds / 60);
    arr[2] = seconds % 60;
  }
  if (seconds >= 3600) {
    arr[0] = Math.floor(seconds / 3600);
    arr[1] = Math.floor((seconds % 3600) / 60);
    arr[2] = seconds - arr[0] * 3600 - arr[1] * 60;
  }
  // Add 0 before number if length is less than 2
  arr.forEach((el, i) => {
    if (el.toString().length < 2) arr[i] = '0' + el;
  });
  return arr.join(':');
}

// Other solution
function humanReadable2(seconds) {
  var pad = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ':' +
    pad(parseInt((seconds / 60) % 60)) +
    ':' +
    pad(seconds % 60)
  );
}
