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
import Header from "./../../components/header/header.component";

const HomePage = () => (
  <HomePageComponent>
    <Header>Algorithm Visualizer</Header>
    <Container>
      <Box>
        <div>
          <h3 style={{ fontFamily: "Georgia" }}>
            <br />
            Search Visualizer
          </h3>
          <br />
        </div>
        <div>
          <Paragraph>
            A simple simulation of Linear Search and Binary Search on an array
            of integers meant for understanding them better.
          </Paragraph>
        </div>
        <div>
          <Link to="/search">
            <CustomButton style={{ borderRadius: "0" }}>
              Search Algorithms
            </CustomButton>
          </Link>
        </div>
      </Box>
      <Box>
        <div>
          <h3 style={{ fontFamily: "Georgia" }}>
            <br />
            Sorting Visualizer
          </h3>
          <br />
        </div>
        <div>
          <Paragraph>
            A simple simulation of Different Sorting Algorithms on an array of
            integers meant for understanding them better.
          </Paragraph>
        </div>
        <div>
          <Link to="/sort">
            <CustomButton style={{ borderRadius: "0" }}>
              Sorting Algorithms
            </CustomButton>
          </Link>
        </div>
      </Box>
    </Container>
  </HomePageComponent>
);

export default HomePage;
