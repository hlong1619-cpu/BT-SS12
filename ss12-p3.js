function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let primes = [];
let number = 2;

while (primes.length < 20) {
  if (isPrime(number)) {
    primes.push(number);
  }
  number++;
}

console.log("20 so nguyen to dau tien la:");
console.log(primes.join(", "));
