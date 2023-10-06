function findLongestWord(sentence) {
    const words = sentence.split(' ');  
  
    let longestWord = '';  
    let longestLength = 0;  
    let mostVowels = 0;  
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].replace(/[^a-z]/gi, ''); 
  
      // Compare the length and vowel count of the current word with the longest word found so far
      if (word.length > longestLength || (word.length === longestLength && countVowels(word) > mostVowels)) {
        longestWord = word; // Update the longest word
        longestLength = word.length; // Update the length of the longest word
        mostVowels = countVowels(word); // Update the vowel count of the longest word
      }
    }
  
    return longestWord; // Return the longest word found
  }
  
  function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels
    let count = 0; // Variable to store the vowel count
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++; // Increment the count if the current character is a vowel
      }
    }
  
    return count; // Return the vowel count
  }
  
  // Test the function
  const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  const longestWord = findLongestWord(sentence);
  console.log(longestWord);