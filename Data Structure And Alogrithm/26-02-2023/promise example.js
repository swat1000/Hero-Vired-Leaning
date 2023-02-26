let num = (number) => {
    return new Promise((resolve, reject) => {
      if (isNaN(number)) {
        reject("Error");
      } else if (number % 2 === 1) {
        setTimeout(() => {
          resolve("This is an odd number");
        }, 1000);
      } else {
        setTimeout(() => {
          reject("This is an even number");
        }, 2000);
      }
    });
  }


  num("data")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  