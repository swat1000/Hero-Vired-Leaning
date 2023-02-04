function rotateBySum(array, sum) {
    let n = array.length;
    let rotationCount = sum % n;
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
      result[(i + rotationCount) % n] = array[i];
      console.log(i)
    }
    return result;
  }

  
  let arr = [1, 2, 3, 4, 5];
let rotatedArray = rotateBySum(arr, 2);
console.log(rotatedArray); 
