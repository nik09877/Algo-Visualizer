import React from "react";

// import styles
import "./array-bars-holder.styles.css";

const ArrayBarsHolder = (props) => (
  <div className="bar-container">
    {props.array.map((value, idx) => (
      <div className="bar" key={idx}>
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side right">
          <div
            className="color-bar right-color-bar"
            style={{
              height: `${value}vh`,
              transform: `translateY(${70 - value}vh)`,
            }}
          ></div>
        </div>
        <div className="side left">
          <div
            className="color-bar left-color-bar"
            style={{
              height: `${value}vh`,
              transform: `translateY(${70 - value}vh)`,
            }}
          ></div>
        </div>
        <div className="side front">
          {props.label === true ? (
            <div style={{ position: "absolute", marginLeft: "1.5vw" }}>
              {value}
            </div>
          ) : null}
          <div
            className="color-bar front-color-bar"
            style={{
              height: `${value}vh`,
              transform: `translateY(${70 - value}vh)`,
            }}
          ></div>
        </div>
        <div className="side back">
          <div
            className="color-bar back-color-bar"
            style={{
              height: `${value}vh`,
              transform: `translateY(${70 - value}vh)`,
            }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

export default ArrayBarsHolder;
