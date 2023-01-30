function arrayOfMultiples(num, length) {
    let multiples = [];
    for (let i = 1; i <= length; i++) {
      multiples.push(num * i);
    }
    return multiples;
  }
  console.log(arrayOfMultiples(12, 10));   