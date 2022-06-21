function Journal(title, date, entry) {
  this.title = title;
  this.date = date;
  this.entry = entry;
}

Journal.prototype.getTeaser = function() {
  let firstSentence = this.entry.split(" ")
  firstSentence =  firstSentence.slice(0,7);
  console.log(firstSentence); // test to return first eight words of the journal entry. 
  return firstSentence;
}

Journal.prototype.numberOfWords = function() {
  let words = this.entry.split(" ");
  return words.length; // test to return the number of words in the entire entry.
}

Journal.prototype.vowels = function() {
  const vowels = ['a','e','i','o','u'];
  let letters = this.entry.split("");
  let vowelCount = 0;
  for(let i = 0; i < letters.length; i++){
    if(vowels.includes(letters[i].toLowerCase())){
      vowelCount++;
    }
  }
  console.log(vowelCount);
  return vowelCount;
}

Journal.prototype.consonants = function() {
  const consonants = 'bcdfghjklmnpqrstvwxyz'.split("");
  let letters = this.entry.split("");
  let consonantCount = 0;
  for(let i = 0; i < letters.length; i++){
    if(consonants.includes(letters[i].toLowerCase())){
      consonantCount++;
    }
  }
  console.log(consonantCount);
  return consonantCount;
}

// let journal1 = new Journal("day1", "6/21/22", "The quick brown fox jumped over the lazy dog.");