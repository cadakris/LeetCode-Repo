/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let addingOne = BigInt(digits.join('')) + BigInt(1)
  return addingOne.toString().split('')
};

//Take the array and make it into a num
//Add 1 i to the num
//then use .split() to turn it back to a string and then split to make it into an array