import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import ChartistGraph from "react-chartist";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import CardFooter from "components/Card/CardFooter.jsx";
import AccessTime from "@material-ui/icons/AccessTime";


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
// <Card>
//   <CardHeader color="primary">
//     <h4 className={classes.cardTitleWhite}>Stock Market</h4>
//     <p className={classes.cardCategoryWhite}>
//       Here is a subtitle for this chart
//     </p>
//   </CardHeader>
//   <CardBody>
//     <Table
//       tableHeaderColor="primary"
//       tableHead={["Name", "Country", "City", "Salary"]}
//       tableData={[
//         ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
//         ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
//         ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
//         ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
//         ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
//         ["Mason Porter", "Chile", "Gloucester", "$78,615"]
//       ]}
//     />
//   </CardBody>
// </Card>



function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      <Card chart>
        <CardHeader color="success">
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Stock Market Volitility</h4>
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 55%
            </span>{" "}
            increase in stocks.
          </p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> updated 4 minutes ago
          </div>
        </CardFooter>
      </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Time", "Location", "Type"]}
              tableData={[
                ["1", "Dakota", "36,738s", "Niger", "Oud-Turnhout"],
                ["2", "Minerva", "23,789s", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage", "56,142s", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip",
                  "38,735s",
                  "Korea, South",
                  "Baileux"
                ],
                [
                  "5",
                  "Doris",
                  "63,542s",
                  "Malawi",
                  "Feldkirchen"
                ],
                ["6", "Mason", "78,615s", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
