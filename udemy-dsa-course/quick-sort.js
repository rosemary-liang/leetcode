function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// pivot
// swap all items one by one btwn swap & i
// final swap in loop, swap pivot & swapIndex
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);

  return swapIndex;
}

pivot([4, 6, 1, 7, 3, 2, 5]);

function quickSort(array, left = 0, right = array.length - 1) {
  // if statement allows us to exit recursion once sorted
  if (left < right) {
    let pivotIndex = pivot(array, left, right); // rearranges array and also RETURNS swapIndex
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

quickSort([4, 6, 1, 7, 3, 2, 5]);
