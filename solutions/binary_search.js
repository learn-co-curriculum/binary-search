function binarySearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return true;
  }

  const searchSide = middleValue > target ? 
    arr.slice(0, middle) : arr.slice(middle + 1);
  
  return binarySearch(searchSide, target);
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return middle;
  }

  if (middleValue > target) {
    return binarySearchIndex(arr.slice(0, middle), target);
  } else {
    const idx = binarySearchIndex(arr.slice(middle + 1), target);

    if (idx === -1) {
      return -1;
    }

    return idx + middle + 1;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", binarySearch([3, 5, 9, 20], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9, 20], -10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", binarySearch([3, 5, 9, 20], 9));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([], 9));

  // UNCOMMENT FOR BONUS
  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));

  console.log("");

  console.log("Expecting: 6");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8], 7));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", binarySearchIndex([4, 7, 20, 30, 40], 40));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8], 3));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
