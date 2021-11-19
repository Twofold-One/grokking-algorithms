// binary search algorithm O(logn);
function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    // to check without binary mechanism
    // let mid = Math.round(low + high);
    let guess = arr[mid];

    if (guess === item) {
      return item;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "There is no such number";
}

// n is the number of elements

const createArr = (n, iterator = 1) => {
  let arr = [];
  for (let i = 1; i <= n; i += iterator) {
    arr.push(i);
  }
  return arr;
};

console.time("createArr");
let testArr = createArr(1000000);
console.timeEnd("createArr");

console.time("log created arr");
console.log(testArr);
console.timeEnd("log created arr");

console.time("binarySearch");
console.log(binarySearch(testArr, 5));
console.timeEnd("binarySearch");
