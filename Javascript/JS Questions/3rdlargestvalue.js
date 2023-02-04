function thirdLargest(array) {
    if (array.length < 3) return null;
    let first = Number.MIN_SAFE_INTEGER, second = Number.MIN_SAFE_INTEGER, third = Number.MIN_SAFE_INTEGER;
    for (let num of array) {
      if (num > first) {
        third = second;
        second = first;
        first = num;
      } else if (num > second) {
        third = second;
        second = num;
      } else if (num > third) {
        third = num;
      }
    }
    return third === Number.MIN_SAFE_INTEGER ? null : third;
  }
  
  let arr = [1, 2, 43, 104, 35];
let thirdLargestValue = thirdLargest(arr);
console.log(thirdLargestValue); 
