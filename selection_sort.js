// Grokking Algorithms implementation (also it's faster)
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

// console.log(findSmallest([4, 3, 5, 1, 8, 9, 6, 7, 2]));
// console.log(findSmallest([77, 23, 34, 99, 11, 12, 4, 1, 9, 2, 3]));

function selectionSort(arr) {
  let initialArr = [...arr];
  let initialLength = initialArr.length;
  let newArr = [];
  //   doesn't work here for full array because of i count (fixed, see below)
  for (let i = 0; i < initialLength; i++) {
    let smallest = findSmallest(initialArr);
    newArr.push(initialArr.splice(smallest, 1)[0]);
  }
  return newArr;
}
console.time("selectionSort");
console.log(selectionSort([4, 3, 5, 1, 8, 9, 6, 7, 2]));
console.timeEnd("selectionSort");

// Note about why I need initialLength
// https://stackoverflow.com/questions/59863691/why-should-length-of-the-array-be-stored-in-selection-sort-algorithm
// Your code is removing the element from the original array, so on each iteration, i++ increases i and also splice decreases array.length. That means i and array.length get closer together by 2 each time instead of by 1, so the loop only iterates half as many times as you want it to. That means you only sort half of the elements into sortedArray.
// By copying const length = array.length; first, the variable length is not changed inside the loop, so the i++ makes i closer to length on each iteration by 1, so the number of iterations is the original array length, and every element gets sorted.
// As a side note, your algorithm sorts into a new array, but leaves the original array empty. That's probably never what you want; a sorting algorithm should either sort the array in-place (leaving the original array in sorted order), or return a new sorted array (leaving the original array unchanged). You could fix this by making a copy of array at the start of your function, so the algorithm destroys the copy instead of the original.

// google search implementation
function selectionSortJS(arr) {
  let initialArr = [...arr];
  for (let i = 0; i < initialArr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < initialArr.length; j++) {
      if (initialArr[j] < initialArr[minIndex]) {
        minIndex = j;
      }
    }
    [initialArr[i], initialArr[minIndex]] = [
      initialArr[minIndex],
      initialArr[i],
    ];
  }
  return initialArr;
}
console.time("selectionSortJS");
console.log(selectionSortJS([4, 3, 5, 1, 8, 9, 6, 7, 2]));
console.timeEnd("selectionSortJS");
