import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Icon from '@material-ui/core/Icon';

import { addToCart } from 'actions/index.js';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProductDescription from 'views/ProductPage/ProductDescription'
import HeaderLinks from 'components/Header/HeaderLinks'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ClickProductDescription(image){
  const ProductInfo = image;
  return(
    <ProductDescription ProductInfo={ProductInfo}></ProductDescription>
  )
}

// function addProductToBasket(props, info){
//   props.store.dispatch({type : 'ADD_TO_CART', product: info});
//   console.log(props.store.getState())
// }

// add filter

function ComplexGrid(props) {
  const { classes, picture, data, store } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="car" src={data.img}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {data.make}
                </Typography>
                <Typography gutterBottom>{data.model}</Typography>
                <Typography color="textSecondary">{data.reg}</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Add To Basket</Typography>
                <Link to="/ProductDescription">Product Description</Link>
                <Route
                  path="/Description"
                  render={props => <ProductDescription />}
                />
                </Grid>
            </Grid>
            <Grid item>
            <Typography variant="subtitle1">{data.mileage}</Typography>
              <Typography variant="subtitle1">{data.price}</Typography>
            </Grid>
            <Grid item>
            <Icon>arrow-circle-down </Icon>
              <i class="fas fa-arrow-circle-down"></i>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
