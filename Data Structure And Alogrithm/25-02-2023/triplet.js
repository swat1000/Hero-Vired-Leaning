// function findTriplet(array, sum) {
//     array.sort((a, b) => a - b);  // sort the array in non-decreasing order
//     for (let i = 0; i < array.length - 2; i++) {
//         let left = i + 1;
//         let right = array.length - 1;
//         while (left < right) {
//             let currentSum = array[i] + array[left] + array[right];
//             if (currentSum === sum) {
//                 return [array[i], array[left], array[right]];
//             } else if (currentSum < sum) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return null;
// }

function triplets(arr, sum){
    for (let i =0; i < arr.length-2; i++){
        let set1 = new Set();
        let temp = sum - arr[i];
        for (j = i+1; j< arr.length-1; j++){
            if(set1.has(temp-arr[j])){
                console.log(arr[i]+ ","+arr[j]+","+ (temp-arr[j]));
                // return true;
            }
            set1.add(arr[j]);
        }
        
    }
    return false;
}

let arr = [2, 4, 6, 8, 10, 6, 7];
let sum = 12;
// let triplet = findTriplet(array, sum);
let triplet2 = triplets(arr, sum);
console.log(triplet2);
