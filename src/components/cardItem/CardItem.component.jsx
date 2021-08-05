// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBBtn,
// } from "mdb-react-ui-kit";

// export default function CardItem() {
//   return (
//     <MDBCard style={customStyle}>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn>Button</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }

// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple,
// } from "mdb-react-ui-kit";

// const customStyle = {
//   maxWidth: "22rem",
//   backgroundColor: "#f8ceec",
//   backgroundImage: "linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)",
//   fontFamily: "sans-serif",
// };

// export default function CardItem() {
//   return (
//     <MDBCard style={customStyle}>
//       <MDBRipple
//         rippleColor="light"
//         rippleTag="div"
//         className="bg-image hover-overlay"
//       >
//         <MDBCardImage
//           src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg"
//           fluid
//           alt="..."
//           style={{ objectFit: "cover" }}
//         />
//         <a>
//           <div
//             className="mask"
//             style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//           ></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href="#">Button</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#f8ceec",
    backgroundImage: "linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)",
  },
});

export default function CardItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
