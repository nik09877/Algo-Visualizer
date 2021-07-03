// import helper functions
import {
  changeBackgroundColor,
  changeBoxShadow,
  resetBarStyleDefault,
  disableSearchButtons,
  enableSearchButtons,
} from "./../../helper-functions";

const COMPAIRING_COLOR = "rgba(255,165,0, 0.9)";
const REVERT_COLOR = "rgba(225, 0, 120, 0.5)";

const BOUNDARY_COLOR = "blue";
const TARGET_COLOR = "rgba(0, 164, 86, 0.6)";
const TARGET_SHADOW = "5px 5px 50px 5px rgba(0, 164, 86, 0.2)";

export const BinarySearch = (array, animationSpeed, target) => {
  // disable buttons before performing binary search
  disableSearchButtons();

  binarySearchHelper(array, animationSpeed, target).then((idx) => {
    //after searching is done
    resetBarStyleDefault(array, animationSpeed);

    enableSearchButtons();

    idx !== -1
      ? alert(`${target} found at index ${idx + 1}!`)
      : alert(`${target} not found!`);
  });
};

async function binarySearchHelper(array, animationSpeed, target) {
  let low = 0,
    prevLow;
  let high = array.length - 1,
    prevHigh;

  while (low <= high) {
    let mid = (low + high) >> 1;
    const currentElement = array[mid];
    prevLow = low;
    prevHigh = high;
    //change background color for comparing
    changeBackgroundColor(low, BOUNDARY_COLOR);
    changeBackgroundColor(high, BOUNDARY_COLOR);
    changeBackgroundColor(mid, COMPAIRING_COLOR);

    await new Promise((resolve) => {
      setTimeout(resolve, (low + 20) * animationSpeed);
    });

    if (currentElement === target) {
      //change background color to green because we found our target value;
      changeBackgroundColor(mid, TARGET_COLOR);
      changeBoxShadow(mid, TARGET_SHADOW);

      await new Promise((resolve) => {
        setTimeout(resolve, (low + 20) * animationSpeed);
      });

      return mid;
    } else if (currentElement > target) {
      high = mid - 1;
    } else low = mid + 1;

    changeBackgroundColor(prevLow, REVERT_COLOR);
    changeBackgroundColor(prevHigh, REVERT_COLOR);
    changeBackgroundColor(mid, REVERT_COLOR);

    await new Promise((resolve) => {
      setTimeout(resolve, (low + 20) * animationSpeed);
    });
  }
  return -1;
}
