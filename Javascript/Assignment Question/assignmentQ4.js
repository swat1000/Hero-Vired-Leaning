function depth(array) {
    let maxDepth = 0;
    function checkDepth(array, presentDepth) {
      if (Array.isArray(array)) {
        maxDepth = Math.max(maxDepth, presentDepth);
        for (let i = 0; i < array.length; i++) {
          checkDepth(array[i], presentDepth + 1);
        }
      }
    }
    checkDepth(array, 1);
    return maxDepth;
  }

console.log(depth([1, 2, 3, 4]));
console.log(depth([1, [2, [3, 4]]]));
console.log(depth([1, [2, [3, [4, 5]]]]));