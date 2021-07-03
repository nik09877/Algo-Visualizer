const getInsertionSortAnimation = (array) => {
  // our animations contain {firstElement,secondElement,doSwap, sortedTill}
  const animations = [];

  // Push animation for sorting first element.
  animations.push(0, 0, false, 0);

  for (let i = 0; i < array.length; i++) {
    const tempValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > tempValue) {
      //swap two values
      [array[j + 1], array[j]] = [array[j], array[j + 1]];

      // Push animation for comparing 2 elements
      animations.push(j, j + 1, false, i);

      // Push animation for swapping 2 elements
      animations.push(j, j + 1, true, i);
      j--;
    }
  }

  // Push animation to know that it's the end of the animations.
  animations.push(array.length - 1, array.length - 1, false, array.length - 1);

  return animations;
};
export default getInsertionSortAnimation;
