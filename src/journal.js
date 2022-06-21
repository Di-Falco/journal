function Journal(title, date, entry) {
  this.title = title;
  this.date = date;
  this.entry = entry;
}

Journal.prototype.getTeaser = function() {
  const firstSentence = this.entry.split(" ")
  firstSentence =  firstSentence.slice(0,7);
  console.log(firstSentence);
  return firstSentence;
}

let journal1 = new Journal("day1", "6/21/22", "The quick brown fox jumped over the lazy dog.");