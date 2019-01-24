import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Icon from '@material-ui/core/Icon';

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

function AddProductToBasket(info){
  // add notification to basket and add to state
}

function ComplexGrid(props) {
  const { classes, pictures } = props;
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
                  Standard license
                </Typography>
                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                <Typography color="textSecondary">ID: 1030114</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Add To Basket</Typography>
                <Link to="/ProductDescription">Product Description</Link>
                <Route
                  path="/Description"
                  render={props => <ProductDescription {...props} extra={pictures} />}
                />              </Grid>
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
