let AddData = (arr) => {
    return new Promise((resolve, reject) => {
        let a = arr[0]
        let b = arr[1]
        if (a < 0 || b < 0) {
            reject("Pass only positive number");

        } else {
            let sum = a + b;
            console.log("Sum is ", sum)
            resolve(arr);

        }
    });
}

AddData([10, 20])
    .then(result => console.log(result))
    .catch(error => console.log(error));



let subtractData = (num1, num2) => {
    return new Promise((resolve, reject) => {
        const result = num1 - num2;
        if (typeof result === "number") {
            resolve(result);
        } else {
            reject("Invalid result");
        }
    });
}

subtractData(10, 5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//Promise.all example if all promise are true then only will work

// const newPromise = Promise.resolve(100);
// const newPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolved");
//     }, 2000);
// });

// Promise.all([newPromise, newPromise2]).then((result) => {
//     console.log(result);
// });


//Promise.any example answers if any one get resolved

// const newPromise = Promise.resolve(100);
// const newPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolved");
//     }, 2000);
// });

// Promise.any([newPromise, newPromise2]).then((result) => {
//     console.log(result);
// });

// promise.allSettled will answer if all are reolved or all are rejected.
const newPromise = Promise.resolve(100);
const newPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved");
    }, 2000);
});

Promise.allSettled([newPromise, newPromise2]).then((result) => {
    console.log(result);
});




