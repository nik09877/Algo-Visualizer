import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    <span>{children}</span>
  </button>
);

export default CustomButton;
