function accum(s) {
  let m = s[0].toUpperCase();
  let add;
  for (let i = 1; i < s.length; i++) {
    m = m + '-' + s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
  }
  return m;
}

let test = 'cfhtyfjASD';

console.log(accum(test));

// Best solution
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

console.log(accum(str));
