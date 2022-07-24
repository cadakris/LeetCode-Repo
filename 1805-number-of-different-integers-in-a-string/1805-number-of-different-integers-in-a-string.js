/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  let nums = word.match(/[0-9]+/g) 
  nums = nums && nums.map(n => n.replace(/^0+/, ''))  
  return [...new Set(nums)].length   
};

  // Use regexp to get all the integers using .match
  //Then get rid of 0s 
  //use set to get unique elements