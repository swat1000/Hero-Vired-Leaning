function possiblechances(a, b) {
    if (a === b) {
      return false;
    } else {
      return (a + 1 <= b) && (a + 6 >= b);
    }
  }

console.log(possiblechances(3, 7));
console.log(possiblechances(1, 9)); 
console.log(possiblechances(5, 3)); 
