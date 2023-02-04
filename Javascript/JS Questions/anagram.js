function isAnagram(string1, string2) {
    if (string1.length !== string2.length) return false;
    let frequency = {};
    for (let char of string1) {
      frequency[char] = ++frequency[char] || 1;
    }
    for (let char of string2) {
      if (!frequency[char]) return false;
      frequency[char]--;
    }
    return true;
  }

  
  let str1 = "paces";
let str2 = "space";
let isAnagramValue = isAnagram(str1, str2);
console.log(isAnagramValue);
