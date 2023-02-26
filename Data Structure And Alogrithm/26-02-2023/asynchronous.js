let name = "Swatantra";
let detail = `The name of the person is ${name}`;
console.log(detail);


console.log("Hello");
setTimeout(() => {console.log("Executing set timeout")}, 2000);
console.log("End");






const seriesOfOp = (a,b) => {
    Addition(a,b, (a,b) => {
        console.log(a+b);
        Substraction(a,b, (a,b) => {
            console.log(a-b);
            Multiplication(a,b, (a,b) => {
                console.log(a*b);
            })
        })
    })
}

seriesOfOp(5,3);
// Function(a) {return a + 200} replica of that
const sum = (a) => a + 200;
console.log(sum(30))