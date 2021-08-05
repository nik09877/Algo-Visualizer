// import animations array
import getInsertionSortAnimation from "./insertion-sort-animation";

// import helper functions
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
} from "./../../helper-functions";

const InsertionSort = (array, animationSpeed) => {
  //get the animations
  const animations = getInsertionSortAnimation(array);

  for (let i = 0; i < animations.length; i += 4) {
    const firstElement = animations[i];
    const secondElement = animations[i + 1];
    const swap = animations[i + 2];
    const sortedTill = animations[i + 3];

    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        changeBackgroundColor(firstElement, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(secondElement, "rgba(255,165,0, 0.9)");

        if (swap) {
          changeBackgroundColor(firstElement, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(secondElement, "rgba(144,238,144, 0.9)");

          // swap heights of bars
          swapBars(firstElement, secondElement);
        }
      }, i * animationSpeed);
      resolve();
    });

    const promise2 = new Promise((resolve) => {
      setTimeout(() => {
        // Change the color-bars of the elements till sortedTill index.
        for (let i = 0; i <= sortedTill; i++) {
          changeBackgroundColor(i, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(i, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        }
        // we know that animation ends when first and second elements are the last element
        if (firstElement === secondElement && firstElement === array.length - 1)
          resolve();
      }, (i + 4) * animationSpeed);
    });

    Promise.all([promise1, promise2]);
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 4) * animationSpeed);
};

export default InsertionSort;
