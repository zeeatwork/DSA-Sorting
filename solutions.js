// 1. Understanding merge sort

// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// 21, 1, 26, 45, 29, 28, 2, 9,          16, 49, 39, 27, 43, 34, 46, 40

// 21, 1, 26, 45,      29, 28, 2, 9,       16, 49, 39, 27,    43, 34, 46, 40

// 21, 1,     26, 45,      29, 28,    2, 9,     16, 49,    39, 27,    43, 34,    46, 40

// 21,   1,   26,   45,   29,   28,    2,   9,     16,   49,    39,   27,    43,   34,  46,   40

//2. Understanding quicksort
// 3 9 1 14 17 24 22 20

// // The pivot could have been 17, but could not have been 14

// Original
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12

// Last Item
// i
// j
// 10, 3, 9, 12, 19, 14, 17, 16, 13, 15

// 3, 9, 12, 14, 13, 15, 17, 16, 19, 10

// First Item
//                                   i
//                j
// 10, 3, 9, 12, 13, 17, 19, 16, 15, 14

// 3. Implementing quicksort

const list = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
];

function quicksort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = quicksort(array, start, middle);
  array = quicksort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, lastIndex, index2) {
  let temp = array[lastIndex];
  array[lastIndex] = array[index2];
  array[index2] = temp;

  return array;
}

console.log(quicksort(list));
