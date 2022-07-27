/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  const numArray = num.split('')
  while(numArray[numArray.length - 1] % 2 === 0) {
    numArray.pop()
  }
  return(numArray.join(''))
};

// wants the largest valued odd number returned as a string
// - split the string into individual elements in an arry
// - check to see if the last number in the array is an odd number. If it is then convert it back to a string and return
// - If not then I want to do a loop to pop off the last number in the array until there is a negative number