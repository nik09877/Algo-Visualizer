// ## This component includes the buttons for sorting algorithms and also generating new array. ## //

import React from "react";
import "./buttons-holder.styles.css";

const BtnHolder = (props) => {
  return (
    <div className="buttons-bar">
      <button onClick={() => props.generateNewArray()} id="reset">
        Generate New Array
      </button>
      <button
        id="bubbleSortButton"
        onClick={() => props.bubbleSort()}
        className="buttonStyle1"
      >
        Bubble Sort
      </button>
      <button
        id="selectionSortButton"
        onClick={() => props.selectionSort()}
        className="buttonStyle2"
      >
        Selection Sort
      </button>
      <button
        id="insertionSortButton"
        onClick={() => props.insertionSort()}
        className="buttonStyle1"
      >
        Insertion Sort
      </button>
      <button
        id="mergeSortButton"
        onClick={() => props.mergeSort()}
        className="buttonStyle2"
      >
        Merge Sort
      </button>
      <button
        id="quickSortButton"
        onClick={() => props.quickSort()}
        className="buttonStyle1"
      >
        Quick Sort
      </button>
    </div>
  );
};
export default BtnHolder;
