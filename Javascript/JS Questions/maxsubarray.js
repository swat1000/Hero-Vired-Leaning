var maxSubArray = function(data) {
    
    for(let i =1; i<data.length;i++){
        data[i] = Math.max(data[i],data[i]+data[i-1])
    }
    return Math.max(...data)
};

data = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(data))