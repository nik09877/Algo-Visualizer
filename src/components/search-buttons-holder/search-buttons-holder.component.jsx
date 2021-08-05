// ## This component includes the buttons for searching algorithms and also generating new array. ## //

import React from "react";
import "./search-buttons-holder.styles.css";

// import { TextField, withStyles } from "@material-ui/core";

// const StyledTextField = withStyles({
//   root: {
//     marginBottom: "1.2%",
//   },
// })(TextField);

const BtnHolder = (props) => {
  return (
    <div className="buttons-bar">
      <button onClick={() => props.generateNewArray()} id="reset">
        Generate New Array
      </button>
      <button
        id="linearSearchButton"
        onClick={() => props.linearSearch()}
        className="buttonStyle1"
      >
        Linear Search
      </button>
      <button
        id="binarySearchButton"
        onClick={() => props.binarySearch()}
        className="buttonStyle2"
      >
        Binary Search
      </button>

      <button
        id="SortButton"
        onClick={() => props.sortArray()}
        className="buttonStyle1"
      >
        Sort The Array!
      </button>
      <div class="input-field">
        <input
          type="text"
          placeholder="Enter Target"
          onChange={props.handleTargetChange}
        />
      </div>
      {/*<StyledTextField
        id="inputField"
        label="Enter a target value"
        size="medium"
        type="number"
        onChange={props.handleTargetChange}
        // defaultValue={props.target}
        // required={true}
        className="input-field"
      />*/}
    </div>
  );
};
export default BtnHolder;
