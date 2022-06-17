// Take the target and subtract it from the num@index
// Check to see if the result is in the array
// If it is in the array the you want to get the index of that number and the num@index


var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const diffIndx = nums.indexOf(diff);
        if (diffIndx !== -1 && diffIndx !== i) {
            return( [i, diffIndx]);
        }
    }
}
