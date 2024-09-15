// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Generator function to yield prime numbers up to a specified limit
  function* primeGenerator(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }
  
  // Example usage
  const limit = 30;
  const primes = primeGenerator(limit);
  
  console.log(`Prime numbers up to ${limit}:`);
  for (const prime of primes) {
    console.log(prime);
  }
  