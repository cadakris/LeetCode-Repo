function moveZeroes (nums) {
  let count = 0
  for (let i = 0; count < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
    }
    count++
  }
  return(nums)
}

//Want to loop through and splice the zeroes and then push a zero
//Use count in order to keep the length of nums in the array. 