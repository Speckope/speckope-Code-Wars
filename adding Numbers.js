function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(40));

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
