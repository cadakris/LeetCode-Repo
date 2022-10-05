var mostWordsFound = function(sentences) {
  let arrOfLengths = []
  let max = 0
  
    for (let i = 0; i < sentences.length; i++) {
      let lengthOfSentence = sentences[i].split(' ').length
      arrOfLengths.push(lengthOfSentence)
    }



  for (let i = 0; i < arrOfLengths.length; i++) {
    if (arrOfLengths[i] > max) {
      max = arrOfLengths[i]
    }
  }
  return max
};