/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  let allNumsArr = nums.flat(1)
  let obj = {}
  let lengthOfNums = nums.length
  let ans = []

  for (let nums of allNumsArr) {
    obj[nums] = obj[nums] + 1 || 1
  }

  for (let valueOfNums in obj) {
    if (obj[valueOfNums] === lengthOfNums) {
      ans.push(parseInt(valueOfNums))
    }
  }
  return ans
};