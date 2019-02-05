import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Basket from "components/Grid/GridItem.jsx";

import Hidden from "@material-ui/core/Hidden";
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
//var Carousel = require('react-responsive-carousel').Carousel;
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }


  render() {
    const { classes, picture } = this.props;
    const { state } = this.props.location.state;
    console.log(state);
    console.log(picture);

    return (
      <GridContainer>
        <GridItem xs={6} sm={6} md={6}>
          <Card plain>
            <Carousel>
              <div>
                  <img src="assets/1.jpg" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src="assets/2.jpeg" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src="assets/3.jpeg" />
                  <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card plain>
            <CardHeader>
              {picture.name}
            </CardHeader>
            <CardBody>

            </CardBody>
            <CardFooter>
            <Button component={Basket} to="/basket">
              Buy
            </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ProductDescription);
