/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let arrOne = s1.split(' ')
  let arrTwo = s2.split(' ')
  let combinedArr = [...arrOne, ...arrTwo]
  let wordHashMap = {}
  let result = []

  for (const word of combinedArr) {
    wordHashMap[word] = wordHashMap[word] + 1 || 1
  }

  for (const word in wordHashMap) {
    if (wordHashMap[word] === 1) {
      result.push(word)
    }
  }
  return result
};