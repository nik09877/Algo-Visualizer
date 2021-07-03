import React from "react";
import { useState, useEffect } from "react";

/* import Components*/
import Header from "./../../components/header/header.component";
import BtnHolder from "./../../components/buttons-holder/btnholder.component";
import RangeSlider from "../../components/range-slider/range-slider.component";
import ArrayBarsHolder from "./../../components/array-bars-holder/array-bars-holder.component";
/*import styled component */
import { SortComponent } from "./sort.styles";

/*import helper functions */
import { randomIntFromInterval } from "./../../helper-functions";

/*import Algorithms */
import BubbleSort from "./../../algorithms/bubble-sort/bubble-sort";
import InsertionSort from "./../../algorithms/insertion-sort/insertion-sort";
import SelectionSort from "./../../algorithms/selection-sort/selection-sort";
import MergeSort from "./../../algorithms/merge-sort/merge-sort";
import QuickSort from "./../../algorithms/quick-sort/quick-sort";

const Sort = () => {
  /* .................................... STATE ..................................... */
  /* here the array holds the elements*/
  const [array, setArray] = useState([]);

  /* it is the number of elements in the array*/
  const [numberOfElements, setNumberOfElements] = useState(10);

  /*it is the animation speed used while running the algorithm */
  const [animationSpeed, setAnimationSpeed] = useState(50);

  /* .................................... Functions ..................................... */
  /*it generates a new array */
  const generateNewArray = () => {
    const newArray = [];
    for (let i = 0; i < numberOfElements; i++) {
      newArray.push(randomIntFromInterval(5, 70));
    }
    setArray(newArray);
  };

  /* This works like componentDidMount() */
  useEffect(() => {
    generateNewArray();
  }, []);

  //  This function is called if the "Array Size" slider is changed. //
  const onChangeArrayBarRangeSlider = (_, value) => {
    setNumberOfElements(value);
    generateNewArray();
  };

  //  This function is called if the "Animation Speed" slider is changed. //
  const onChangeAnimationSpeedRangeSlider = (_, value) => {
    setAnimationSpeed(value);
  };

  //  Calls the BubbleSort function.  //
  const bubbleSort = () => {
    BubbleSort(array, animationSpeed);
  };

  //  Calls the InsertionSort function. //
  const insertionSort = () => {
    InsertionSort(array, animationSpeed);
  };

  //  Calls the SelectionSort function. //
  const selectionSort = () => {
    SelectionSort(array, animationSpeed);
  };

  //  Calls the MergeSort function. //
  const mergeSort = () => {
    MergeSort(array, animationSpeed);
  };

  //  Calls the QuickSort function. //
  const quickSort = () => {
    QuickSort(array, animationSpeed);
  };
  /* ........................... Render Components..................................... */
  return (
    <SortComponent>
      <Header>Sorting Visualizer</Header>
      <BtnHolder
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        selectionSort={selectionSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
      />
      <ArrayBarsHolder array={array} />
      <RangeSlider
        numberOfArrayBars={numberOfElements}
        animationSpeed={animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
    </SortComponent>
  );
};

export default Sort;
