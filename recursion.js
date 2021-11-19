// countdown
function countdown(n) {
  // base case
  if (n <= 0) {
    return;
  } else {
    // recusive case
    console.log(n);
    return countdown(n - 1);
  }
}

// console.log already in the function
countdown(5);
console.log("");

// factorial
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`factorial = ${factorial(5)}`);
console.log("");

// sum values of array using recursion
function sum(arr) {
  let initialArr = arr;
  if (initialArr.length === 0) {
    return 0;
  } else {
    console.log(initialArr);
    console.log(initialArr[0]);
    return initialArr[0] + sum(initialArr.splice(1));
  }
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 9, 10]));
console.log("");

// count elements in array
function count(arr) {
  let initialArr = arr;
  if (initialArr.length === 0) {
    return 0;
  } else {
    return 1 + count(initialArr.splice(1));
  }
}

console.log(count([1, 1, 1, 1, 1, 1, 1]));
console.log("");

// find max value in arr
function max(arr) {
  let initialArr = arr;
  if (initialArr.length === 2) {
    console.log("end");
    if (initialArr[0] > initialArr[1]) {
      return initialArr[0];
    } else {
      return initialArr[1];
    }
  } else {
    let subMax = max(initialArr.splice(1));
    console.log(initialArr);
    if (initialArr[0] > subMax) {
      return initialArr[0];
    } else {
      return subMax;
    }
  }
}

console.log(max([1, 4, 10, 5, 22, 46, 15, 55, 100]));
