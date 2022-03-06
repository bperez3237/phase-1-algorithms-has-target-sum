function hasTargetSum(array, target) {
  // Write your algorithm here

  if (array.length > 1) {
  for (let index = 1; index < array.length; index++) {
    if (array[0] + array[index] === target) {
      return true;
    }
  }
  return hasTargetSum(array.slice(1,array.length), target)
  }
  else {
    return false
  }
}

/* 
  Write the Big O time complexity of your function here
*/
//
/* 
  Add your pseudocode here
*/
//let array copy

//function target sum
//for index in array -- only need first element 
// /for index + 1 in array
// / / if index + (index+1) = target => true
// / / else tragetsum(array.shift(),target)
/*
  Add written explanation of your solution here
*/
//
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0,0], 0));
 
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2,3], 4));
}

module.exports = hasTargetSum;
