import styled from "styled-components";

export const RangeSliderComponent = styled.div`
  height: 8%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: visibility 0.3s linear, opacity 0.3s linear;
`;

export const ItemComponent = styled.div`
  width: 80%;
  justify-self: center;
  color: white;
`;
