import React from "react";

import { useState, useEffect } from "react";

/* import Components*/
import Header from "./../../components/header/header.component";
import BtnHolder from "./../../components/search-buttons-holder/search-buttons-holder.component";
import RangeSlider from "../../components/range-slider/range-slider.component";
import ArrayBarsHolder from "./../../components/array-bars-holder/array-bars-holder.component";

/*import styled component */
import { SearchComponent } from "./search.styles";

/*import helper functions */
import { randomIntFromInterval } from "./../../helper-functions";

/* import algorithms */
import { LinearSearch } from "../../algorithms/linear-search/linear-search";
import { BinarySearch } from "../../algorithms/binary-search/binary-search";

const Search = () => {
  /* .................................... STATE ..................................... */
  /* here the array holds the elements*/
  const [array, setArray] = useState([]);

  /* it is the number of elements in the array*/
  const [numberOfElements, setNumberOfElements] = useState(10);

  /*it is the animation speed used while running the algorithm */
  const [animationSpeed, setAnimationSpeed] = useState(50);

  const [target, setTarget] = useState("");
  /* .................................... Functions ..................................... */
  /*it generates a new array */
  const generateNewArray = () => {
    //making sure there are no duplicate values
    const dict = new Set();
    const newArray = [];
    for (let i = 0; i < numberOfElements; i++) {
      let val = randomIntFromInterval(5, 70);
      while (dict.has(val)) {
        val = randomIntFromInterval(5, 70);
      }
      newArray.push(val);
      dict.add(val);
    }
    setArray(newArray);
  };

  /* This works like componentDidMount() */
  useEffect(() => {
    generateNewArray();
  }, []);

  /*It sorts the current array */
  const sortArray = () => {
    const newArray = [];
    const auxiliaryArray = [...array];
    auxiliaryArray.sort((a, b) => a - b);
    for (let i = 0; i < numberOfElements; i++) {
      newArray.push(auxiliaryArray[i]);
    }
    setArray(newArray);
  };
  //  This function is called if the "Array Size" slider is changed. //
  const onChangeArrayBarRangeSlider = (_, value) => {
    setNumberOfElements(value);
    generateNewArray();
  };

  //  This function is called if the "Animation Speed" slider is changed. //
  const onChangeAnimationSpeedRangeSlider = (_, value) => {
    setAnimationSpeed(value);
  };

  //  This function is called if the "Target" value is changed. //
  const handleTargetChange = (event) => {
    setTarget(Number(event.target.value));
  };

  //  This function is called to perform Linear Search. //
  const linearSearch = () => {
    if (target === "") {
      alert("please enter a target value!");
      return;
    }
    LinearSearch(array, animationSpeed, target);
  };

  //  This function is called to perform Binary Search. //
  const binarySearch = () => {
    //If target is invalid
    if (target === "") {
      alert("please enter a target value!");
      return;
    }

    //If array is not sorted
    if (!isSorted(array)) {
      alert("please sort the array before doing binary search!");
      return;
    }

    BinarySearch(array, animationSpeed, target);
  };

  // It returns true if array is sorted else false
  function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  }
  /* ........................... Render Components..................................... */
  return (
    <SearchComponent>
      <Header>Searching Visualizer</Header>
      <BtnHolder
        generateNewArray={generateNewArray}
        handleTargetChange={handleTargetChange}
        linearSearch={linearSearch}
        binarySearch={binarySearch}
        sortArray={sortArray}
      />
      <ArrayBarsHolder array={array} label={true} />
      <RangeSlider
        numberOfArrayBars={numberOfElements}
        animationSpeed={animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
    </SearchComponent>
  );
};

export default Search;
