// import helper functions
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  swap,
} from "./../../helper-functions";

// const COMPAIRING_COLOR = "rgba(255,165,0, 0.9)";
const SWAPPING_COLOR = "rgba(144,238,144, 0.9)";
const SORTED_COLOR = "rgba(0, 164, 86, 0.6)";
const SORTED_SHADOW = "5px 5px 50px 5px rgba(0, 164, 86, 0.2)";

const QuickSort = (array, animationSpeed) => {
  disableButtons();

  quickSortHelper(array, 0, array.length - 1, animationSpeed).then(() => {
    resetBarStyleDefault(array, animationSpeed);
    enableButtons();
  });
};

async function quickSortHelper(array, left, right, animationSpeed) {
  // left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
  if (left < right) {
    let pivot = await partition(array, left, right, animationSpeed);
    await quickSortHelper(array, left, pivot - 1, animationSpeed);
    await quickSortHelper(array, pivot + 1, right, animationSpeed);
  }
}

async function partition(array, left, right, animationSpeed) {
  let pivot = array[right]; // pivot
  let pivotIdx = right; // pivotIdx
  let i = left - 1; // Index of smaller element

  changeBackgroundColor(pivotIdx, "blue");

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, pivotIdx * animationSpeed);
  });

  for (let j = left; j <= right - 1; j++) {
    // If current element is smaller than or
    // equal to pivot
    if (array[j] <= pivot) {
      i++; // increment index of smaller element

      changeBackgroundColor(i, SWAPPING_COLOR);
      changeBackgroundColor(j, SWAPPING_COLOR);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, j * animationSpeed);
      });

      swap(array, i, j);
      swapBars(i, j);
      changeBackgroundColor(i, SORTED_COLOR);
      changeBoxShadow(i, SORTED_SHADOW);
      changeBackgroundColor(j, SORTED_COLOR);
      changeBoxShadow(j, SORTED_SHADOW);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, j * animationSpeed);
      });
    }
  }
  swap(array, i + 1, right);
  swapBars(i + 1, right);
  changeBackgroundColor(i + 1, SORTED_COLOR);
  changeBoxShadow(i + 1, SORTED_SHADOW);
  changeBackgroundColor(right, SORTED_COLOR);
  changeBoxShadow(right, SORTED_SHADOW);

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, right * animationSpeed);
  });

  return i + 1;
}

export default QuickSort;
