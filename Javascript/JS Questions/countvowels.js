function countVowelsConsonants(string) {
    let vowels = "aeiouAEIOU";
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (let char of string) {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else if (char.match(/[a-zA-Z]/)) {
        consonantsCount++;
      }
    }
    return [vowelsCount, consonantsCount];
  }

  let str = "Swatantra Chaurasiya";
let [vowelsCount, consonantsCount] = countVowelsConsonants(str);
console.log("Vowels Count: " + vowelsCount, "Consonants Count: " + consonantsCount);
