import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Icon from '@material-ui/core/Icon';

import { addToCart } from 'actions/index.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProductDescription from 'views/ProductPage/ProductDescription'

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

function addProductToBasket(info){

}

function ComplexGrid(props) {
  const { classes, pictures,data } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={pictures}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {data.name.phone}
                </Typography>
                <Typography gutterBottom>{data.name.title} {data.name.first} {data.name.last}</Typography>
                <Typography color="textSecondary">{data.id.value}</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }} onclick={addProductToBasket(data)}>Add To Basket</Typography>
                <Link to="/ProductDescription">Product Description</Link>
                <Route
                  path="/Description"
                  render={props => <ProductDescription />}
                />
                </Grid>
            </Grid>
            <Grid item>
            <Typography variant="subtitle1"><strike>$35.00</strike></Typography>
              <Typography variant="subtitle1">$19.00</Typography>
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
