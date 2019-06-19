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
    console.log(props);
    let valuetext = 0;
    this.state = {
      products: [],
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
          "imagepath":"assets/img/img1.jpg"
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
          "imagepath":"assets/img/img2.jpg"
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
          "imagepath":"assets/img/img3.jpg"
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
          "imagepath":"assets/img/img4.jpg"
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
    fetch('http://localhost:2003/Vehicle')
    .then(results => results.json())
    .then((data) => {
      this.state.vehicleslist = data
      this.setState({vehicleslst: data})
      return data
    })
  }

  createVehicles = () => {
    const items = [];
    let vehicles = this.fetchData();
    let vehicleslist = vehicles.map((item, key) => {
      items.push(
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <ComplexGrid props={item}>
          </ComplexGrid>
        </GridItem>
      )
    })
    return vehicleslist;
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
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.manufacturer = make)
    this.setState({"vehicle":vehicleslist});
  }

  filterVehicleByModel = (model) => {
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.model = model)
    this.setState({'vehicle':vehicleslist});
  }

  filterVehicleByReg = (reg) => {
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.registration = reg)
    this.setState({'vehicle':vehicleslist});
  }

  filterVehicleByColour = (color) => {
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.color = color)
    this.setState({'vehicle':vehicleslist});
  }

  filterVehicleByPrice = (val) => {
    let min = val.min;
    let max = val.max;
    let vehicleslist = this.state.vehicleslist;
    vehicleslist.filter(vehicleslist.price < max & vehicleslist.price > min)
    this.setState({'vehicle':vehicleslist});
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

    this.fetchdata();

  }

  render() {
    const { classes, store, pictures, pic, vehicles, tileData } = this.props;
    const { rows, rowsPerPage, page, results, anchorEl } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 500 - page * rowsPerPage);
    const open = Boolean(anchorEl);
    return (
      <div className = "wrapper">
        <div className = "container2">
          <div className = "container1">
          <GridContainer justify="center">
          <Select onChange={(event) => this.filterVehicleByMake(event.target.value, event)}>
            <MenuItem value="">
              <em>Please Select:</em>
            </MenuItem>
            <MenuItem value='ford'>Ford</MenuItem>
            <MenuItem value='seat'>Seat</MenuItem>
            <MenuItem value='seat'>Saab</MenuItem>
          </Select>
          <Select onChange={(event) => this.filterVehicleByModel(event.target.value, event)}>
            <MenuItem value="">
              <em>Please Select:</em>
            </MenuItem>
            <MenuItem value='ford'>Aero</MenuItem>
            <MenuItem value='seat'>Fiesta</MenuItem>
            <MenuItem value='seat'>Ghia</MenuItem>
          </Select>
          <Select onChange={(event) => this.filterVehicleByModel(event.target.value, event)}>
            <MenuItem value="">
              <em>Please Select:</em>
            </MenuItem>
            <MenuItem value='ford'>Ford</MenuItem>
            <MenuItem value='seat'>Seat</MenuItem>
            <MenuItem value='seat'>Saab</MenuItem>
          </Select>
          <Slider
            value='10'
            onChange={(event) => this.filterVehicleByPrice(event.target.value, event)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText='price'
          />
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
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <Paper className={classes.root}>
              <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                  <TableBody>
                    <GridItem xs={12} sm={12} md={10} lg={8}>
                      <ComplexGrid>
                      </ComplexGrid>
                    </GridItem>
                      {this.state.vehicles.map((vehicle) => (
                      <GridItem xs={12} sm={12} md={10} lg={8}>
                        <ComplexGrid>
                        </ComplexGrid>
                      </GridItem>
                    ))}
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
                    {tileData.map(tile => (
                      <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
                </GridItem>
              </GridContainer>
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
