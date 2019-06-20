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
import ColorPicker from 'material-ui-color-picker'
import { TwitterPicker } from 'react-color'

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
    // const [value, setValue] = React.useState<number | number[]>([20, 37]);
    this.state = {
      products: [],
      rowsPerPage:5,
      page:1,
      anchorEl: null,
      demolist: [
        {
          "id": 1,
          "registration": 2018,
          "manufacturer": "Seat",
          "model": "Leon",
          "variant":"1.2",
          "color":"#abb8c3",
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
          "color":"#8ed1fc",
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
          "color":"#9900ef",
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
          "color":"#9900ef",
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

  // handleChange = (event: any, newValue: number | number[]) => {
  //     setValue(newValue);
  //   };

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
      const demolist = this.state.demolist
      this.setState({"vehicleslist": data})
      this.setState({"apilist": data})
      this.setState({"vehicleslist": demolist})
      console.log('set state for vehicleslist', this.state.vehicleslist);
      return data
    })
  }

  resetVehicles = () => {
    const items = [];
    let vehicles = this.fetchData();
    console.log('reset the vehicleslist then ...', this.state.vehicleslist);
    let vehicleslist = this.state.vehicleslist.map((item, key) => {
      console.log('map each vehicle to component', item, key)
      items.push(
        <GridItem key={key} xs={12} sm={12} md={10} lg={8}>
        <div style={{ padding: 20, marginBottom: 40, marginTop: 20 }}>
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
    console.log('return the full vehiclelist component with data', items);
    this.items = items;
    return items;
  }

  createVehicles = () => {
    const items = [];
    console.log('check the state', this.state);
    const vehicles = this.state.vehicleslist;
    console.log('check the vehicleslist', vehicles);
    let vehicleslist = this.state.demolist.map((item, key) => {
      console.log('map each vehicle to component', item, key)
      items.push(
        <GridItem style={{padding:10}} key={key} xs={12} sm={12} md={10} lg={8}>
        <div style={{ padding: 20, marginBottom: 60 }}>
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
    console.log('return the full vehiclelist component with data', items);
    this.items = items;
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
    let vehicleslist = this.state.demolist;
    const filteredlist = vehicleslist.filter(function(vehicle){ console.log(vehicle); if (vehicle.manufacturer.toLowerCase() == make.toLowerCase()){ return true; } else { return false; }});
    console.log('filter vehicle list to show only make', filteredlist)
    this.setState({"vehicleslist":filteredlist});
    this.state.vehicleslist = filteredlist;
    console.log('update the state',this.state);
    this.resetVehicles();
  }

  //dynamically load models according to this make

  filterVehicleByReg = (reg) => {
    console.log('filter by reg', reg)
    let vehicleslist = this.state.demolist;
    console.log('reset the reg', vehicleslist);
    const filteredlist = vehicleslist.filter(function(vehicle){ console.log(vehicle); if (vehicle.registration == parseInt(reg)){ return true; } else { return false; }})
    this.setState({'vehicleslist':filteredlist});
    this.state.vehicleslist = filteredlist;
    this.resetVehicles();
  }

  //impleent a slider for mileage

  filterVehicleByPrice = (val, newValue) => {
    console.log(' what are the min and max values of the slider', val, newValue)
    let min = newValue[0];
    let max = newValue[1];
    let vehicleslist = this.state.demolist;
    const filteredlist = vehicleslist.filter(function(vehicle){ console.log(vehicle, max, min); if (vehicle.price < max & vehicle.price > min) { return true; } else {return false; }})
    console.log('filtered list by price range', filteredlist);
    this.setState({'vehicleslist':filteredlist});
    this.state.vehicleslist = filteredlist;
    this.resetVehicles();
  }

  filterVehicleByColor = (color) => {
    console.log('get the current color', color.hex);
    let vehicleslist = this.state.demolist;
    const filteredlist = vehicleslist.filter(function(vehicle){ console.log(vehicle.color); if (vehicle.color == color.hex) { return true; } else { return false; }});
    console.log('check color is correct', filteredlist);
    this.setState({'vehicleslist':filteredlist});
    this.state.vehicleslist = filteredlist;
    this.resetVehicles();
  }

  componentDidMount(props){
    this.fetchData();
    console.log('check state contains vehicle list', this.state);
    this.items = this.createVehicles();
    console.log('display the list of vehicles component', this.items);

  }

  render() {
    const { classes, store, pictures, pic, vehicles, tileData } = this.props;
    const { rows, rowsPerPage, page, results, anchorEl } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 500 - page * rowsPerPage);
    // const [value, setValue] = React.useState<number | number[]>([20, 37]);
    const open = Boolean(anchorEl);
    return (
      <div className = "wrapper">
        <div className = "container2">
          <div className = "container1" style={{ padding: 40, marginBottom:80 }}>
            <Paper>
              <GridContainer justify="left" style={{ padding: 40, marginBottom:80 }}>
                <GridItem>
                <InputLabel htmlFor="age-simple">Make</InputLabel>
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
              <InputLabel htmlFor="age-simple">Reg</InputLabel>
              <Select onChange={(event) => this.filterVehicleByReg(event.target.value, event)}>
                <MenuItem value="">
                  <em>Please Select:</em>
                </MenuItem>
                <MenuItem value='1999'>1999</MenuItem>
                <MenuItem value='2000'>2000</MenuItem>
                <MenuItem value='2001'>2001</MenuItem>
                <MenuItem value='2002'>2002</MenuItem>
                <MenuItem value='2003'>2003</MenuItem>
                <MenuItem value='2004'>2004</MenuItem>
                <MenuItem value='2005'>2005</MenuItem>
                <MenuItem value='2006'>2006</MenuItem>
                <MenuItem value='2007'>2007</MenuItem>
                <MenuItem value='2008'>2008</MenuItem>
                <MenuItem value='2009'>2009</MenuItem>
                <MenuItem value='2010'>2010</MenuItem>
                <MenuItem value='2011'>2011</MenuItem>
                <MenuItem value='2012'>2012</MenuItem>
                <MenuItem value='2013'>2013</MenuItem>
                <MenuItem value='2014'>2014</MenuItem>
                <MenuItem value='2015'>2015</MenuItem>
                <MenuItem value='2016'>2016</MenuItem>
                <MenuItem value='2017'>2017</MenuItem>
                <MenuItem value='2018'>2018</MenuItem>
                <MenuItem value='2019'>2019</MenuItem>
              </Select>
              </GridItem>
              <GridItem>
              <InputLabel htmlFor="price">Price</InputLabel>
                <Slider
                  min = {0}
                  max = {10000}
                  value={[100, 5000]}
                  onChange={(event, value) => this.filterVehicleByPrice(event, value)}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                />
              </GridItem>
              <GridItem>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="color">Colour</InputLabel>
                  <TwitterPicker
                    onChangeComplete={ (val) => this.filterVehicleByColor(val) } />
                  </FormControl>
              </GridItem>
            </GridContainer>
          </Paper>
            <GridItem style={{margin:10}} xs={12} sm={12} md={10} lg={8}>
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

            </div>
          </GridItem>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Product);
