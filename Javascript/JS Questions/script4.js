////count the number of prime elements in an array
arr = [1,2,3,4,5,6,7,34,35,45,2,12,45]

function countPrimes(arr) {
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
  
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) count++;
    }
    return count;
  }
  
  console.log(countPrimes(arr))
  
  
  