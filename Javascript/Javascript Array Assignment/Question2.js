function possibleChance(a, b) {
    
    if (a === b) {
      return false;
    }
    for (let i = 1; i <= 6; i++) {
      if (a + i === b) {
        return true;
      }
    }
    return false;
  }
  let position = [3,7]
  