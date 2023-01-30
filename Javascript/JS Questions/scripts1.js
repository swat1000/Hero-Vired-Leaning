/////Remove Duplicates from Array

arr = [2,34,35,45,2,12,45]
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  console.log(removeDuplicates(arr))