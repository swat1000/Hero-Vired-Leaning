function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function smallestPrimeDivisor(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0 && isPrime(i)) {
      return i;
    }
  }
  return num;
}

function rotateQueue(queue, k) {
  while(k--) {
    queue.push(queue.shift());
  }
  return queue;
}

function getPassword(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const smallestPrime = numbers.find(num => isPrime(num));
  const smallestDivisor = smallestPrime ? smallestPrime : smallestPrimeDivisor(sum);
  const rotations = sum % numbers.length;
  const queue = numbers.slice();
  return rotateQueue(queue, rotations);
}



console.log(getPassword([90, 45, 37, 80, 1, 46]));
console.log(getPassword([90, 45, 78, 27, 63]));