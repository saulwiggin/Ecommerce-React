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

import ComplexGrid from "components/ComplexGrid/ComplexGrid.jsx";
import ProductDescription from "components/ComplexGrid/ComplexGrid.jsx";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { getList } from 'components/Api/Api.js';

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Product extends React.Component {
  constructor(){
    super();
    this.state = {
      products: []
    };
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

  componentDidMount(){
    fetch('https://pricesearcher-frontend-test.herokuapp.com/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application-json',
        'X-API-KEY': "46c0a1e171c76bb37784d60aad4df750"
      },
      body: JSON.stringify(data)
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
    <Link to="/ProductDescription">Product Description</Link>
    <Route
      path="/ProductDescription"
      render={pic => <ProductDescription />}
    />
  }

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page, pictures, results } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 500 - page * rowsPerPage);
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
                  this.state.pictures.map( pic => (
                    <TableRow key={results} onClick={this.redirectProductDescription(pic)} >
                    {pic}
                    </TableRow>
                  ))
                      </TableRow>
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 48 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
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
