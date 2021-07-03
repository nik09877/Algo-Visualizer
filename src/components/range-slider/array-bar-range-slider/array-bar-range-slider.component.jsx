import React from "react";
/*import styled component */
import {
  ArrayBarRangeSliderComponent,
  TextComponent,
} from "./array-bar-range-slider.styles";

/*material ui */
import { Slider, withStyles } from "@material-ui/core";

const ArrayBarSlider = withStyles({
  root: { color: "rgba(100, 180, 255, 1)", inlineSize: "60%", padding: 10 },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const ArrayBarRangeSlider = (props) => {
  return (
    <ArrayBarRangeSliderComponent>
      <TextComponent>Array Size</TextComponent>
      <ArrayBarSlider
        id="ArrayBarSlider"
        min={2}
        max={14}
        step={1}
        defaultValue={props.numberOfArrayBars}
        valueLabelDisplay="auto"
        onChange={props.onChangeArrayBarRangeSlider}
      />
    </ArrayBarRangeSliderComponent>
  );
};

export default ArrayBarRangeSlider;
