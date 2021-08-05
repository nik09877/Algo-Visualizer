import React from "react";
import { Link } from "react-router-dom";
/*import styled component */
import {
  HomePageComponent,
  Container,
  Box,
  Paragraph,
} from "./homepage.styles";

/* import Components*/
import CustomButton from "./../../components/custom-button/custom-button.component";
import CardItem from "../../components/cardItem/CardItem.component";
import Header from "./../../components/header/header.component";

const HomePage = () => (
  <HomePageComponent>
    <Header>Algorithm Visualizer</Header>
    <Container>
      <CardItem />
      <CardItem />
      {/* <Box>
        <h3 style={{ fontFamily: "Georgia" }}>Searching Visualizer</h3>

        <Paragraph>
          A simple simulation of Linear Search and Binary Search on an array of
          integers meant for understanding them better.
        </Paragraph>

        <Link to="/search">
          <CustomButton style={{ borderRadius: "0" }}>
            Searching Algorithms
          </CustomButton>
        </Link>
      </Box>

      <Box>
        <h3 style={{ fontFamily: "Georgia" }}>Sorting Visualizer</h3>

        <Paragraph>
          A simple simulation of Different Sorting Algorithms on an array of
          integers meant for understanding them better.
        </Paragraph>

        <Link to="/sort">
          <CustomButton style={{ borderRadius: "0" }}>
            Sorting Algorithms
          </CustomButton>
        </Link>
     </Box>*/}
    </Container>
  </HomePageComponent>
);

export default HomePage;
