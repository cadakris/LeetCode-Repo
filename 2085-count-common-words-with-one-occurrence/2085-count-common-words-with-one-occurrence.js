/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
      let count=0, hash1={}; hash2={}
  for (let i = 0; i < words1.length; i++) {
    hash1[words1[i]] = hash1[words1[i]]+1 || 1
  }
  for (let j = 0; j < words2.length; j++) {
    hash2[words2[j]] = hash2[words2[j]] + 1 || 1
  }
    for(let key in hash1){
        if(hash1[key]==1 && hash2[key]==1){
			count++;
		}
    }
    return(count);
};