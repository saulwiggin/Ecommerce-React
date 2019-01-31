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

class Product extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      anchorEl: null
    };
  }

  function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }



  const middleware = [ thunk ];
  if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
  }

  let store = createStore(reducer, applyMiddleware(..middleware))

  store.dispatch({ type: 'INCREMENT' })

  store.subscribe(() => console.log(store.getState()))

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

  componentDidMount(){
    fetch('https://pricesearcher-frontend-test.herokuapp.com/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application-json',
        'X-API-KEY': "46c0a1e171c76bb37784d60aad4df750"
      }
    })
    //.then(response => response.json()).then(data => this.setState({ data: data })).catch(error => this.setState({ error, isLoading: false }));
    //fetch('https://randomuser.me/api/?results=500')
    .then (results => {
      console.log(results);
      this.setState({results: results});
      return results.json();
    }).then(data => {
      console.log(data.results);
      let pictures = data.results.map((pic) => {
        return(
          <div key={pic.results}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <ComplexGrid pictures={pic.picture.medium} data={pic}>
            </ComplexGrid>
          </GridItem>
        </div>
        )
      })
      this.setState({pictures: pictures});
      this.setState({page: 0});
      this.setState({rowsPerPage: 5});

      console.log("state", this.state.pictures);
    })
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

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page, pictures, results, anchorEl } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 500 - page * rowsPerPage);
    const open = Boolean(anchorEl);
    return (
      <div className = "wrapper">
        <div className = "container2">
          <div className = "container1">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <Paper className={classes.root}>
              <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                  <TableBody>
                  {pictures.map((pic) => (
                    <div>
                      <TableRow key={results} onClick={this.redirectProductDescription(pic)}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={this.handlePopoverOpen}
                        onMouseLeave={this.handlePopoverClose}>
                      {pic}
                      </TableRow>
                    </div>
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
