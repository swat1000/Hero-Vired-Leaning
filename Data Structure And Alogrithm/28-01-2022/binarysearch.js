function binarySearch() {
    var start = 0, end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        let middlevalue = arr[mid];

        if(num === middlevalue) {
            return true;
        }else if(num < middlevalue){
            mid = mid -1;
        }else {
            start = mid + 1;
        }
    }
    return false;
}

arr = [1,2,3,4,5,6,7,8,9,10]
num = 3;

console.log(binarySearch(num))