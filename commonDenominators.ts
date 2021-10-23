/* Given a list of rationals in a form 
[ [numer_1, denom_1] , ... [numer_n, denom_n] ], 
where all numbers are positive ints, 
produce a result in the form "(N_1, D) ... (N_n, D)" */

function convertFrac(list: [number, number][]) {
  // Get all second numbers in each array
  const denomArr = list.map((arr) => arr[1]);

  // Find least common multiple using Euclidean algorithm
  const gcd = (a: number, b: number): number => {
    // If b === 0
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };

  const lcm = (a: number, b: number): number => {
    return (a * b) / gcd(a, b);
  };

  // Find common denominator
  let denom = denomArr.reduce((p, c) => lcm(p, c));

  // Multiply 1st numbers by the result of common demon / 2nd array number and
  // insert denom at 2nd
  let newArr = list.map((arr) => [arr[0] * (denom / arr[1]), denom]);

  // Format arrays to answer
  return newArr.map((arr) => `(${arr[0]},${arr[1]})`).join('');
}

// Best solution
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);

function convertFrac2(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${(n * cd) / d},${cd})`).join('');
}
