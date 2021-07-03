import React from "react";
import { HeaderComponent, AnimatedText } from "./header.styles";
const Header = ({ children }) => {
  return (
    <HeaderComponent>
      <AnimatedText>{children}</AnimatedText>
    </HeaderComponent>
  );
};

export default Header;
