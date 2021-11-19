function quicksort(arr) {
  let initialArr = arr;
  if (initialArr.length < 2) {
    return initialArr;
  } else {
    let pivot = initialArr[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < initialArr.length; i++) {
      if (initialArr[i] <= pivot) {
        less.push(initialArr[i]);
      } else if (initialArr[i] > pivot) {
        greater.push(initialArr[i]);
      }
    }
    return [...quicksort(less), pivot, ...quicksort(greater)];
    // return quicksort(less).concat(pivot, quicksort(greater));
  }
}

console.time("quicksort");
console.log(quicksort([4, 10, 5, 7, 2, 6, 8, 3, 1, 9]));
console.timeEnd("quicksort");
