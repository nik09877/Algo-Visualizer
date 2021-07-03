//import animations
import getMergeSortAnimations from "./merge-sort-animations";

// import helper functions
import {
  changeBackgroundColor,
  makeAllBarsGreen,
  resetBarStyleDefault,
  getBarStyle,
} from "./../../helper-functions";

const PRIMARY_COLOR = "rgba(255,165,0, 0.9)";
const SECONDARY_COLOR = "rgba(144,238,144, 0.9)";

const MergeSort = (array, animationSpeed) => {
  //get the animations
  const animations = getMergeSortAnimations(array);

  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [firstElement, secondElement] = animations[i];
      const color = i % 3 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;

      setTimeout(() => {
        changeBackgroundColor(firstElement, color);
        changeBackgroundColor(secondElement, color);

        if (i === animations.length - 1) {
          makeAllBarsGreen(array, animationSpeed);
        }
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const [firstElement, newHeight] = animations[i];
        const styleOfElement1 = getBarStyle(firstElement);

        for (let j = 0; j < 4; j++) {
          styleOfElement1[j].height = `${newHeight}vh`;

          const h1 = parseInt(styleOfElement1[j].height, 10);

          styleOfElement1[j].transform = `translateY(${70 - h1}vh)`;
        }
      }, i * animationSpeed);
    }
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 5) * animationSpeed);
};
export default MergeSort;
