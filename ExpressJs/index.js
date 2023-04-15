let p = new Promise((res,rej)=>{
    if(1 ==2)
    res(true);
    else
    rej(false);
});

p.then((message)=>{
    console.log('Inside then met');
},(message)=>{
    console.log("Ind");

}).catch((message)=>{
    console.log("catch");
});