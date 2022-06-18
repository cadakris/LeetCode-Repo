/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let number = num.join("")
  number = BigInt(number)
  number += BigInt(k)
  return(number.toString().split(""))
};