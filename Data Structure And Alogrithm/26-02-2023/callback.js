const add = (a,b) => {
    let sum = a + b;
    console.log(sum);
    return sum;
}

const sub = (a,b) => {
    let sub = a - b;
    console.log(sub);
    return sub;
}

const mul = (a,b) => {
    let mul = a * b;
    setTimeout(() => {
        console.log(mul)
    }, 5000)
    
    return mul;
}

const Addition = (a,b,callBackFunction) => {
    callBackFunction(a,b);
}

const Substraction = (a,b,callBackFunction) => {
    callBackFunction(a,b);
}

const Multiplication = (a,b,callBackFunction) => {
    callBackFunction(a,b);
}

Addition(1,3,add)
Substraction(5,2,sub)
Multiplication(10,2,mul)
