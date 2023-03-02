function isPalindrome(x) {
    if (x < 0) {
      return false;
    }
    
    let reversed = 0;
    let original = x;
    
    while (x !== 0) {
      let digit = x % 10;
      reversed = reversed * 10 + digit;
      x = Math.floor(x / 10);
    }
    
    return original === reversed;
  }
  
  console.log(isPalindrome(121)); 