function romantoInt(num){
    const romanValue = {
        'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    }

    let result = 0;

    for (let i = 0; i < num.length; i++){
         let value = romanValue[num[i]];
         let nextValue = romanValue[num[i+1]];

         if (nextValue && nextValue > value){
            result-=value;
         }else{
            result+=value;
         }

    }
    return result;
}

console.log(romantoInt("IIIIII"));