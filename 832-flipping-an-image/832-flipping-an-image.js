/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const arr=[]
    for(let i = 0; i < image.length; i++) {
    let newImage = image[i].map((num) => num ===1 ? 0:1).reverse()
    arr.push(newImage)
  }
  return(arr)
};

//You have to loop through each array to get individual array of nums
//map over the each indivudal array of nums to get the one number
//use a ternery to change the value
//use .reverse()method
//push it to an empty array
