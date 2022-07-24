/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
      let negCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return(0)
    } else if (nums[i] < 0) {
      negCount++
    }
  }
      if (negCount % 2 === 0) {
      return(1)
    } else {
      return(-1) 
    }
};

// if there is a 0 in an array, return 0 
// if there is a negative amount of negative numbers, return -1
// else, return 1