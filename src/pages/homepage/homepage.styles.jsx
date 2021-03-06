import styled from "styled-components";

export const HomePageComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #7f53ac;
  background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
  box-sizing: border-box;
`;

export const Container = styled.div`
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.div`
  padding: 120px;
  margin: 20px;
  height: 55%;
  width: 28%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background-color: #f8ceec;
  background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%);
  transition: all 1s;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: -3px 3px 5px 6px rgba(0, 0, 0, 0.4); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: -3px 3px 5px 6px rgba(0, 0, 0, 0.4); /* Firefox 3.5 - 3.6 */
    box-shadow: -3px 3px 5px 6px rgba(0, 0, 0, 0.4); /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }
  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 541px) {
    h3 {
      font-size: 1rem;
    }
    height: 17.8rem;
  }
  @media only screen and (max-width: 376px) {
    h3 {
      font-size: 0.9rem;
    }
    height: 10rem;
  }
`;

export const Paragraph = styled.p`
  font-family: sans-serif;
  font-size: 1.1rem;
  @media only screen and (max-width: 541px) {
    font-size: small;
  }

  @media only screen and (max-width: 410px) {
    font-size: x-small;
  }

  @media only screen and (max-width: 320px) {
    font-size: xx-small;
  }
`;
