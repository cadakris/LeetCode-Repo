/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = salary[0]
  let max = 0
  let sum = 0
  for (let i = 0; i < salary.length; i ++) {
    if (max < salary[i]) max = salary[i]
    if (min > salary[i]) min = salary[i]
    sum += salary[i]
  }
  return (sum-min-max) / (salary.length -2)
};

// find the min and the max number using a for loop and then set them to a variable
// in the same loop add up all the salary save it to a variable
// return the sum minus the min and max. Divided by the array of the length - 2 to get rid of the min and max numbers