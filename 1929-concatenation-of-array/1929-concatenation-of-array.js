/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArray = [...nums]
    nums.forEach(num => newArray.push(num))
    return newArray
};