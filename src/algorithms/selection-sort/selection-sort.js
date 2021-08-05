import getSelectionSortAnimations from "./selection-sort-animation";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
} from "./../../helper-functions";

// color of currentElement -> black
// color of minIndexElement -> blue
// color of comparingElement -> orange
// color of finalElement -> green

const SelectionSort = (array, animationSpeed) => {
  //get animations
  const animations = getSelectionSortAnimations(array);

  for (let i = 0; i < animations.length; i += 6) {
    const currentElement = animations[i];
    const comparingElement = animations[i + 1];
    const minIndexElement = animations[i + 2];
    const swap = animations[i + 3];
    const isFinalElement = animations[i + 4];
    const finalElement = animations[i + 5];

    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        // Change the color-bar of current elements.
        changeBackgroundColor(currentElement, "rgba(0,0,0, 0.9)");
        changeBackgroundColor(comparingElement, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(minIndexElement, "rgba(0,0,255, 0.9)");

        if (swap) {
          // Change the color-bar of elements which have to be swapped.
          changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(currentElement, "rgba(144,238,144, 0.9)");

          // swap the heights of the elements.
          swapBars(currentElement, minIndexElement);
        }
      }, i * animationSpeed);
      resolve();
    });

    const promise2 = new Promise((resolve) => {
      setTimeout(() => {
        if (isFinalElement === true) {
          // Change the color-bar of finalElement index which has taken its final sorted position.
          changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px rgba(0, 164, 86, 0.2)"
          );
        } else {
          // Change the color-bar of elements which have not taken its final sorted position yet.
          changeBackgroundColor(comparingElement, "rgba(225, 0, 120, 0.6)");
          changeBackgroundColor(minIndexElement, "rgba(225, 0, 120, 0.6)");
        }

        // Resolve the promise when the finalElement index is (array.length - 1).
        if (finalElement === array.length - 1) resolve();
      }, (i + 6) * animationSpeed);
    });

    Promise.all([promise1, promise2]);
  }
  // Reset the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 6) * animationSpeed);
};
export default SelectionSort;
