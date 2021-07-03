const getSelectionSortAnimation = (array) => {
  const animations = []; // {currentElement,comparingElement,minIdx,swap,isFinalElement,finalElement}

  for (let i = 0; i < array.length; i++) {
    //push animation for currentElement
    let minIdx = i;
    animations.push(i, i, minIdx, false, false, -1);

    for (let j = i + 1; j < array.length; j++) {
      // Push animation for (i)th, (j)th and (minIdx)th index elements.
      animations.push(i, j, minIdx, false, false, -1);
      if (array[j] < array[minIdx]) {
        minIdx = j;

        // Push animation for changing minIdx element.
        animations.push(i, j, minIdx, false, false, -1);
      }
    }

    if (minIdx !== i) {
      // Swap 2 values.
      [array[i], array[minIdx]] = [array[minIdx], array[i]];

      // Push animation for swapping (i)th index and (minIdx)th index elements.
      animations.push(i, i, minIdx, true, false, -1);
    }

    // Here, the (i)th indexed element will be sorted. So we need to change its color.
    animations.push(i, i, i, false, true, i);
  }
  return animations;
};
export default getSelectionSortAnimation;
