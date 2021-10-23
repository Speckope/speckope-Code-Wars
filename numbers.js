function createPhoneNumber(numbers) {
  let num = numbers;
  num =
    '(' +
    num.slice(0, 3).join('') +
    ')' +
    ' ' +
    num.slice(3, 6).join('') +
    '-' +
    num.slice(6, 10).join('');
  return num;
}

let p1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let p1out = '(123) 456-7890';

console.log(createPhoneNumber(p1));

console.log(typeof p1.slice(6, 9).join(''));

// Best practice
function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
