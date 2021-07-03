import React from "react";

/*import styled component */
import {
  AnimationSpeedRangeSliderComponent,
  TextComponent,
} from "./animation-speed-range-slider.styles";

/*material ui */
import { Slider, withStyles } from "@material-ui/core";

const AnimationSpeedSlider = withStyles({
  root: {
    color: "rgba(100, 180, 255, 1)",
    inlineSize: "60%",
    padding: 10,
  },
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

const AnimationSpeedRangeSlider = (props) => {
  return (
    <AnimationSpeedRangeSliderComponent>
      <TextComponent>Animation Speed (ms)</TextComponent>
      <AnimationSpeedSlider
        id="animationSpeedSlider"
        min={10}
        max={200}
        defaultValue={props.animationSpeed}
        valueLabelDisplay="auto"
        onChange={props.onChangeAnimationSpeedRangeSlider}
      />
    </AnimationSpeedRangeSliderComponent>
  );
};

export default AnimationSpeedRangeSlider;
