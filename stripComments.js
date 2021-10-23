// Funcion removing comments with after custom comment marker
// Input is string and array of markers. Whitespaces after marker should also be removed
// Remove comment only in one line. Next line in passed string is marked as '/n'
// 4kyu

function solution(input, markers) {
  // 2 approaches come to my mind : regex and multiple pointers.
  // So basically this function should cut all characters between a marker and /n
  // If no /n cut characters untill the end of a string.
  // 1. Convert input to an array.
  let arr = input.split('');
  // 2. Create two pointers, one will keep track of last important character('/n' or comment mark)
  // 2nd pointer will keep track track whether its a comment or not
  let [p1, p2] = [0, 0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (markers.indexOf(arr[i]) !== -1 && p2 === 0) {
      // slice to newArr so we dont alter arr
      newArr = [...newArr, ...arr.slice(p1, i - 1)];
      // Change p1 to say now we're in a comment
      p1 = i;
      p2 = 1;
    }
    // Two cases for when we meet '\n'
    if (arr[i] === '\n' && p2 === 0) {
      newArr = [...newArr, ...arr.slice(p1, i)];
      p1 = i;
    }
    if (arr[i] === '\n' && p2 === 1) {
      p1 = i;
      p2 = 0;
    }
    // When at the end copy depending on comment p2 state
    if (i === arr.length - 1 && p2 === 0) {
      newArr = [...newArr, ...arr.slice(p1, i)];
    }
  }
  return newArr.join('');
}

// Other solution
function solution2(input, markers) {
  return input.replace(
    new RegExp('\\s?[' + markers.join('') + '].*(\\n)?', 'gi'),
    '$1'
  );
}
//
function solution3(input, markers) {
  return (
    input
      .split('\n')
      // for every line
      .map((line) =>
        // for every marker we make this operation in line, /
        markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
      )
      .join('\n')
  );
}

var result = solution(
  'apples, plums % and bananas\npears\noranges !applesauce',
  ['%', '!']
);

console.log(result);
('apples, pears # and bananas\ngrapes\nbananas  !apples');
(' 0            1             0        0        1 ');

// Failed attempt
// function solution(input, markers) {
//   // 2 approaches come to my mind : regex and multiple pointers.
//   // So basically this function should cut all characters between a marker and /n
//   // If no /n cut characters untill the end of a string.
//   // 1. Convert input to an array.
//   let arr = input.split('');
//   // 2. Create one pointer at 0, 2nd at 0.
//   let [p1] = [0];
//   let newArr = [];
//   // 3. Loop for length of an array, when 2nd pointer meets comment mark >>
//   for (let i = 0; i < arr.length; i++) {
//     // >> Push elements from looping array(from 1st pointer to 2nd) to new array with slice(), use rest operator to spread them.
//     if (markers.indexOf(arr[i]) !== -1 && markers.indexOf(arr[p1] !== -1)) {
//       newArr = [...newArr, ...arr.slice(p1, i)];
//       p1 = i;
//     }

//     if (arr[i] === '/n' && markers.indexOf(arr[p1] !== -1)) {
//       console.log('hey');
//       newArr = [...newArr, ...arr.slice(p1, i)];
//       p1 = i;
//     }
//     if ([arr[i - 1], arr[i]].join('') == '/n') {
//       console.log('hey2');
//       p1 = i;
//     }
//     // 5. Continue loop. When 2nd pointer meets /n, move 1st pointer to this position, do nothing. Continue loop.
//     if (i === arr.length - 1 && markers.indexOf(arr[p1] !== -1)) {
//       newArr = [...newArr, ...arr.slice(p1, i)];
//     }
//   }
//   return newArr.join('');
//   // 4. Move 1st pointer to 2nd pointer position.
//   // 6. If char under c1 is mark and array is finished, dont push, else push from c1 to the end!
// }
