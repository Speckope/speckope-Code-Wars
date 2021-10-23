// Returns true when number is prime and false when not
function isPrime(num) {
  if (num <= 1) return false;
  // find lowest number that num is divisible
  // No point in going after k. Passes time complexity
  for (let i = 2, k = Math.sqrt(num); i <= k; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
isPrime(31);
