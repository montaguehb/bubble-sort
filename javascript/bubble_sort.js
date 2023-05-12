function bubbleSort(arr) {
  // type your code here
  let sorted = false
  while(!sorted) {
    sorted = true
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        //normal swap wasn't working, used bitwise XOR to swap instead
        sorted = false
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        // arr[i] ^= arr[i + 1]
        // arr[i + 1] ^= arr[i]
        // arr[i] ^= arr[i + 1]
      }
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// Create a bool that is true by default and is set to false if the swap happens while iterating over the array
// while the bool is false continue to iterate over the entire array
// If the swap never happens, the array is sorted and returned
// And a written explanation of your solution
// Space complexity is O(n) time complexity is O(n^2)