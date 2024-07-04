// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Print all prime numbers between 1 and 100
for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
