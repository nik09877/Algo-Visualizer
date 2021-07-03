import React from "react";

/*Import Styled Components */
import { RangeSliderComponent, ItemComponent } from "./range-slider.styles";

/*Import Components */
import ArrayBarRangeSlider from "./array-bar-range-slider/array-bar-range-slider.component";
import AnimationSpeedRangeSlider from "./animation-speed-range-slider/animation-speed-range-slider.component";

const RangeSlider = (props) => {
  return (
    <RangeSliderComponent id="range-slider">
      <ItemComponent>
        <ArrayBarRangeSlider
          numberOfArrayBars={props.numberOfArrayBars}
          onChangeArrayBarRangeSlider={props.onChangeArrayBarRangeSlider}
        />
      </ItemComponent>
      <ItemComponent>
        <AnimationSpeedRangeSlider
          animationSpeed={props.animationSpeed}
          onChangeAnimationSpeedRangeSlider={
            props.onChangeAnimationSpeedRangeSlider
          }
        />
      </ItemComponent>
    </RangeSliderComponent>
  );
};

export default RangeSlider;
