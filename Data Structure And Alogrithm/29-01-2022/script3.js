///find max and min of an array
arr = [1,3,45,2,6,54,5,4]

function findMinMax(arr) {
    return {
      mindigit: Math.min(...arr), maxdigit: Math.max(...arr)
    };
  }
  console.log(findMinMax(arr))