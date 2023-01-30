///find the frequency of a number in array
arr = [1,3,45,2,6,54,5,4]

function findFrequency(arr, num) {
    return arr.filter(item => item === num).length;
  }
console.log(findFrequency(arr))