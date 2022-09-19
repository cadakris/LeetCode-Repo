/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = mergeList(nums1, nums2)
  let middle;
  if (arr.length % 2 !== 0) {
    middle = Math.floor(arr.length / 2)
    return arr[middle]
  } else {
    middle = arr.length / 2
    return (arr[middle - 1] + arr[middle]) / 2
  }
};

function mergeList(nums1, nums2) {
  let arr = []
  let f = 0
  let s = 0

  while (!isNaN(nums1[f]) || !isNaN(nums2[s])) {
   if (nums1[f] <= nums2[s]) {
     arr.push(nums1[f])
     f++
   } else if (nums2[s] <= nums1[f]) {
     arr.push(nums2[s])
     s++
   }
  if (nums1[f] === undefined && !isNaN(nums2[s])) {
    arr.push(nums2[s])
    s++
  } else if (nums2[s] === undefined && !isNaN(nums1[f])) {
      arr.push(nums1[f])
      f++
    }
  }
  return arr
}