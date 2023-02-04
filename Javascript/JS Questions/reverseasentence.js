function reverseSentence(sentence) {
    let words = sentence.split(" ");
    let n = words.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      [words[i], words[n - i - 1]] = [words[n - i - 1], words[i]];
       console.log(words)
    }
    return words.join(" ");
  }
  

  let sentence = "My Name is Swatantra Chaurasiya";
let reversedSentence = reverseSentence(sentence);
console.log(reversedSentence); 
