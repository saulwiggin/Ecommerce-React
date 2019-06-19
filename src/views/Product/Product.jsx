import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Table from '@material-ui/core/Table';
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import ButtonBase from '@material-ui/core/ButtonBase';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
//import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Grid from '@material-ui/core/Grid';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/lab/Slider';

import Img1 from 'assets/cars/img1.jpg';
import Img2 from 'assets/cars/img2.jpg'
import Img3 from 'assets/cars/img3.jpg'
import Img4 from 'assets/cars/img4.jpg'

import ComplexGrid from "components/ComplexGrid/ComplexGrid.jsx";
import ProductDescription from "components/ComplexGrid/ComplexGrid.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { getList } from 'components/Api/Api.js';
import { bugs, website, server } from "variables/general.jsx";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import img from "assets/img/faces/marc.jpg";
import axios from 'axios';
import amazon from 'amazon-product-api';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});


  const middleware = [ thunk ];

  if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
  }

class Product extends React.Component {
  constructor(props){
    super(props);
    let valuetext = 0;
    this.state = {
      products: [],
      rowsPerPage:5,
      page:1,
      anchorEl: null,
      vehicleslist: [
        {
          "id": 1,
          "registration": 2018,
          "manufacturer": "Seat",
          "model": "Leon",
          "variant":"1.2",
          "color":"grey",
          "mileage":2796,
          "price":14865,
          "imagepath":Img1
        },
        {
          "id": 2,
          "registration": 2000,
          "manufacturer": "Saab",
          "model": "Aero",
          "variant":"2.3",
          "color":"blue",
          "mileage":106040,
          "price":275,
          "imagepath":Img2
        },
        {
          "id": 3,
          "registration": 1999,
          "manufacturer": "Ford",
          "model": "Fiesta",
          "variant":"1.25",
          "color":"silver",
          "mileage":47000,
          "price":295,
          "imagepath":Img3
        },
        {
          "id": 4,
          "registration": 2004,
          "manufacturer": "Ford",
          "model": "Ghia",
          "variant":"1.8",
          "color":"grey",
          "mileage":163292,
          "price":299,
          "imagepath":Img4
        }
      ]
    }
  }

  static async getInitialProps(){
    const list = await getList();
    console.log(list);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  //fetch the data from the json server
   fetchData = () => {
    fetch('http://localhost:3000/Vehicles')
    .then(results => results.json())
    .then((data) => {
      console.log('return data from api', data);
      this.state.vehicleslist = data
      this.setState({vehicleslst: data})
      return data
    })
  }

  createVehicles = () => {
    const items = [];
    let vehicles = this.fetchData();
    let vehicleslist = this.state.vehicleslist.map((item, key) => {
      console.log('map each vehicle to component', item, key)
      items.push(
        <GridItem key={key} xs={12} sm={12} md={10} lg={8}>
        <div style={{ padding: 20 }}>
              <Paper>
                <Grid container>
                  <Grid item>
                    <ButtonBase >
                      <img alt="complex" src={item.imagepath} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {item.manufacturer} - {item.model} - {item.variant}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          mileage: {item.mileage} - Registration {item.registration}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          color: {item.color}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">£{item.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
        </GridItem>
      )
    })
    console.log('return the full vehiclelist compoent with data', items);
    return items;
  }

   redirectProductDescription = (pic) => {
     return(
       <div>
        <Link to="/ProductDescription">Product Description</Link>
        <Route
          path="/ProductDescription"
          render={pic => <ProductDescription />}
        />
      </div>
     )
  }

  filterVehicleByMake = (make) => {
    console.log('filter by make', make);
    let vehicleslist = this.state.vehicleslist;
    const filteredlist = vehicleslist.filter(function(vehicle){ console.log(vehicle); if (vehicle.manufacturer.toLowerCase() == make.toLowerCase()){ return true; } else { return false; }});
    console.log('filter vehicle list to show only make', filteredlist)
    this.setState({"vehicleslist":filteredlist});
    this.createVehicles();
  }

  filterVehicleByModel = (model) => {
    //reset list
    vehicleslist = this.fetchData();
    console.log('reset to complete vehicleslist', vehicleslist);
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.model = model)
    this.setState({'vehicleslist':vehicleslist});
  }

  filterVehicleByReg = (reg) => {
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.registration = reg)
    this.setState({'vehicleslist':vehicleslist});
  }

  filterVehicleByColour = (color) => {
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.color = color)
    this.setState({'vehicleslist':vehicleslist});
  }

  filterVehicleByPrice = (val) => {
    let min = val.min;
    let max = val.max;
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.price < max & vehicleslist.price > min)
    this.setState({'vehicleslist':vehicleslist});
  }

  componentDidMount(props){

    const tileData = [
      {
        img: 'assets/img/side-bar-1.jpeg',
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: 'assets/img/side-bar-2.jpeg',
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: 'assets/img/side-bar-3.jpeg',
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: 'assets/img/side-bar-4.jpeg',
        title: 'Image',
        author: 'author',
        cols: 2,
      },
    ];

    this.fetchData();
    console.log('check state contains vehicle list', this.state);
    this.items = this.createVehicles();
    console.log('display the list of vehicles component', this.items);
  }

  render() {
    const { classes, store, pictures, pic, vehicles, tileData } = this.props;
    const { rows, rowsPerPage, page, results, anchorEl } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 500 - page * rowsPerPage);
    const open = Boolean(anchorEl);
    return (
      <div className = "wrapper">
        <div className = "container2">
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <div className = "container1" style={{ padding: 20 }}>
            <Paper>
              <GridContainer justify="left">
                <GridItem>
                  <Select onChange={(event) => this.filterVehicleByMake(event.target.value, event)}>
                  <MenuItem value="">
                    <em>Please Select:</em>
                  </MenuItem>
                  <MenuItem value='ford'>Ford</MenuItem>
                  <MenuItem value='seat'>Seat</MenuItem>
                  <MenuItem value='seat'>Saab</MenuItem>
                </Select>
              </GridItem>
              <GridItem>
              <Select onChange={(event) => this.filterVehicleByModel(event.target.value, event)}>
                <MenuItem value="">
                  <em>Please Select:</em>
                </MenuItem>
                <MenuItem value='ford'>Aero</MenuItem>
                <MenuItem value='seat'>Fiesta</MenuItem>
                <MenuItem value='seat'>Ghia</MenuItem>
              </Select>
              </GridItem>
              <GridItem>
                <Slider
                  value='10'
                  onChange={(event) => this.filterVehicleByPrice(event.target.value, event)}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                />
              </GridItem>
              <GridItem>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="color">Colour</InputLabel>
                    <Select
                      value='color'
                      onChange={(event) => this.filterVehicleByColour(event.target.value, event)}
                      inputProps={{
                        name: 'color',
                        id: 'color-simple',
                      }}
                    >
                    </Select>
                  </FormControl>
              </GridItem>
            </GridContainer>
          </Paper>
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <Paper className={classes.root}>
              <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                  <TableBody>
                    {this.items}
                  </TableBody>
                  <Popover
                   id="mouse-over-popover"
                   className={classes.popover}
                   classes={{
                     paper: classes.paper,
                   }}
                   open={open}
                   anchorEl={anchorEl}
                   anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                   }}
                   transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                   }}
                   onClose={this.handlePopoverClose}
                   disableRestoreFocus
                 >
                   <Typography>I use Popover.</Typography>
                 </Popover>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={3}
                        count={500}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          native: true,
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </Paper>
            </GridItem>
            <GridItem xs={12} sm={12} md={10} lg={8}>
            <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {this.state.vehicleslist.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </GridItem>
          </div>
          </GridItem>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Product);
