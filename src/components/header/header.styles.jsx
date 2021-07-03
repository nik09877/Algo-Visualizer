import styled, { keyframes } from "styled-components";

export const HeaderComponent = styled.div`
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const animate = keyframes`
   0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`;

export const AnimatedText = styled.p`
  margin: 0.5%;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: xx-large;
  letter-spacing: 1vw;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${animate} 3s linear infinite;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);

  @media only screen and (max-width: 510px) {
    font-size: large;
  }

  @media only screen and (max-width: 320px) {
    font-size: medium;
  }
`;
