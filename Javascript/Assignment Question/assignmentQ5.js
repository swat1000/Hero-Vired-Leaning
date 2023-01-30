function nearestVowel(letter) {
    const vowels = "aeiou";
    if (vowels.includes(letter)) {
      return letter;
    }
    let nearestVowel = "";
    let minDistance = Infinity;
    for (let i = 0; i < vowels.length; i++) {
      const distance = Math.abs(letter.charCodeAt(0) - vowels.charCodeAt(i));
      if (distance < minDistance) {
        minDistance = distance;
        nearestVowel = vowels[i];
      }
    }
    return nearestVowel;
  }
console.log(nearestVowel("b")); 
console.log(nearestVowel("s")); 
console.log(nearestVowel("i"));
console.log(nearestVowel("z"));