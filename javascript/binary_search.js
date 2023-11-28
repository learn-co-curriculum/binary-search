function binarySearch(arr, target) {
  if (arr.length === 0) return false

  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex]

  if (middleValue === target) return true

  if (middleValue > target) {
    return binarySearch(arr.slice(0, middleIndex), target)
  } else {
    return binarySearch(arr.slice(middleIndex + 1), target)
  }

}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  const logging = {};
  logging.arr = arr;
  logging.target = target;
  logging.arrlength = arr.length;
  
  if (arr.length === 0) {
    logging.step = 'length zero';
    console.log(logging);
    return -1
  }
  
  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex]
  logging.middleIndex = middleIndex;
  logging.middleValue = middleValue;
  
  if (arr.length === 1 && middleValue !== target){
    logging.step = 'length one, not match';
    console.log(logging);
    return -1 
  } 
  if (middleValue === target){
    logging.step = 'middle value match';
    console.log(logging);
    return middleIndex
  } 

  if (middleValue > target) {
    logging.step = 'search first half';
    console.log(logging);
    return binarySearchIndex(arr.slice(0, middleIndex), target)
  } else {
    logging.step = 'search second half';
    const indexSlice = binarySearchIndex(arr.slice(middleIndex), target)
    logging.indexSlice = indexSlice;
    console.log(logging);
    if (indexSlice > 0){
      return middleIndex  + indexSlice
    }else{
      return -1
    }
  }
}



if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: true");
  // console.log("=>", binarySearch([1, 2, 3], 3));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", binarySearch([3, 5, 9], 10));

  // // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));

  // console.log("Expecting: 1");
  // console.log("=>", binarySearchIndex([1,10], 10));

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([1,4], 10));

  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([10], 10));

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4], 10));

  console.log("Expecting: 11");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12));

}


module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
