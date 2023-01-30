function swap(x,y,arr){
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}



function bubblesort(arr){
    for(let i=0; i<arr.length;i++){
        for(let j = 0;j<arr.length-i; j++){
           if(arr[j]>arr[j+1]){
            swap(j,j+1,arr)
           }
           
        }
    }
    return arr
}

arr = [2,5,6,3,34,23,65]
console.log(bubblesort(arr))