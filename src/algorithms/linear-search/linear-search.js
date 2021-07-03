// import helper functions
import {
  changeBackgroundColor,
  changeBoxShadow,
  resetBarStyleDefault,
  disableSearchButtons,
  enableSearchButtons,
} from "./../../helper-functions";

const COMPAIRING_COLOR = "rgba(255,165,0, 0.9)";
const TARGET_COLOR = "rgba(0, 164, 86, 0.6)";
const TARGET_SHADOW = "5px 5px 50px 5px rgba(0, 164, 86, 0.2)";

export const LinearSearch = (array, animationSpeed, target) => {
  // disable buttons before performing linear search
  disableSearchButtons();

  linearSearchHelper(array, animationSpeed, target).then((idx) => {
    //after searching is done
    resetBarStyleDefault(array, animationSpeed);

    enableSearchButtons();

    idx !== -1
      ? alert(`${target} found at index ${idx + 1}!`)
      : alert(`${target} not found!`);
  });
};

async function linearSearchHelper(array, animationSpeed, target) {
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];

    //change background color for comparing
    changeBackgroundColor(i, COMPAIRING_COLOR);

    await new Promise((resolve) => {
      setTimeout(resolve, (i + 20) * animationSpeed);
    });

    if (currentElement === target) {
      //change background color to green because we found our target value;
      changeBackgroundColor(i, TARGET_COLOR);
      changeBoxShadow(i, TARGET_SHADOW);

      await new Promise((resolve) => {
        setTimeout(resolve, (i + 20) * animationSpeed);
      });

      return i;
    }
  }
  return -1;
}
