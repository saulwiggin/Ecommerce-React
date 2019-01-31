import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
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
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {CardElement, injectStripe} from 'react-stripe-elements';
import CheckoutForm from "components/Stripe/CheckoutForm"

import './stripe.css'

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Basket extends React.Component {
  state = {
    value: 0,
    expanded: null,
  };

  handleAccordianChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  onComponentMount(){
    // var elements = stripe.elements({
    //     fonts: [
    //       {
    //         cssSrc: 'https://fonts.googleapis.com/css?family=Source+Code+Pro',
    //       },
    //     ],
    //     // Stripe's examples are localized to specific languages, but if
    //     // you wish to have Elements automatically detect your user's locale,
    //     // use `locale: 'auto'` instead.
    //     locale: window.__exampleLocale
    //   });
    //
    //   // Floating labels
    //   var inputs = document.querySelectorAll('.cell.example.example2 .input');
    //   Array.prototype.forEach.call(inputs, function(input) {
    //     input.addEventListener('focus', function() {
    //       input.classList.add('focused');
    //     });
    //     input.addEventListener('blur', function() {
    //       input.classList.remove('focused');
    //     });
    //     input.addEventListener('keyup', function() {
    //       if (input.value.length === 0) {
    //         input.classList.add('empty');
    //       } else {
    //         input.classList.remove('empty');
    //       }
    //     });
    //   });
    //
    //   var elementStyles = {
    //     base: {
    //       color: '#32325D',
    //       fontWeight: 500,
    //       fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
    //       fontSize: '16px',
    //       fontSmoothing: 'antialiased',
    //
    //       '::placeholder': {
    //         color: '#CFD7DF',
    //       },
    //       ':-webkit-autofill': {
    //         color: '#e39f48',
    //       },
    //     },
    //     invalid: {
    //       color: '#E25950',
    //
    //       '::placeholder': {
    //         color: '#FFCCA5',
    //       },
    //     },
    //   };
    //
    //   var elementClasses = {
    //     focus: 'focused',
    //     empty: 'empty',
    //     invalid: 'invalid',
    //   };
    //
    //   var cardNumber = elements.create('cardNumber', {
    //     style: elementStyles,
    //     classes: elementClasses,
    //   });
    //   cardNumber.mount('#example2-card-number');
    //
    //   var cardExpiry = elements.create('cardExpiry', {
    //     style: elementStyles,
    //     classes: elementClasses,
    //   });
    //   cardExpiry.mount('#example2-card-expiry');
    //
    //   var cardCvc = elements.create('cardCvc', {
    //     style: elementStyles,
    //     classes: elementClasses,
    //   });
    //   cardCvc.mount('#example2-card-cvc');
    //
    //   registerElements([cardNumber, cardExpiry, cardCvc], 'example2');
  }


  // const { ProductProfile } =
  //     <GridItem xs={12} sm={6} md={3}>
  //       <Card>
  //         <CardHeader color="warning" stats icon>
  //           <CardIcon color="warning">
  //             <Icon>content_copy</Icon>
  //           </CardIcon>
  //           <p className={classes.cardCategory}>Used Space</p>
  //           <h3 className={classes.cardTitle}>
  //             49/50 <small>GB</small>
  //           </h3>
  //         </CardHeader>
  //         <CardFooter stats>
  //           <div className={classes.stats}>
  //             <Danger>
  //               <Warning />
  //             </Danger>
  //             <a href="#pablo" onClick={e => e.preventDefault()}>
  //               Get more space
  //             </a>
  //           </div>
  //         </CardFooter>
  //       </Card>
  //     </GridItem>

  render() {
    const { classes } = this.props;
    return (
      <div>
      <GridContainer>
        <GridItem xs={6} sm={6} md={3}>
          <Card>
            <form>
              <div data-locale-reversible>
                <div class="row">
                  <div class="field">
                    <input id="example2-address" data-tid="elements_examples.form.address_placeholder" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1"/>
                    <label for="example2-address" data-tid="elements_examples.form.address_label">Address</label>
                    <div class="baseline"></div>
                  </div>
                </div>
                <div class="row" data-locale-reversible>
                  <div class="field half-width">
                    <input id="example2-city" data-tid="elements_examples.form.city_placeholder" class="input empty" type="text" placeholder="San Francisco" required="" autocomplete="address-level2"/>
                    <label for="example2-city" data-tid="elements_examples.form.city_label">City</label>
                    <div class="baseline"></div>
                  </div>
                  <div class="field quarter-width">
                    <input id="example2-state" data-tid="elements_examples.form.state_placeholder" class="input empty" type="text" placeholder="CA" required="" autocomplete="address-level1"/>
                    <label for="example2-state" data-tid="elements_examples.form.state_label">State</label>
                    <div class="baseline"></div>
                  </div>
                  <div class="field quarter-width">
                    <input id="example2-zip" data-tid="elements_examples.form.postal_code_placeholder" class="input empty" type="text" placeholder="94107" required="" autocomplete="postal-code"/>
                    <label for="example2-zip" data-tid="elements_examples.form.postal_code_label">ZIP</label>
                    <div class="baseline"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="field">
                  <div id="example2-card-number" class="input empty"></div>
                  <label for="example2-card-number" data-tid="elements_examples.form.card_number_label">Card number</label>
                  <div class="baseline"></div>
                </div>
              </div>
              <div class="row">
                <div class="field half-width">
                  <div id="example2-card-expiry" class="input empty"></div>
                  <label for="example2-card-expiry" data-tid="elements_examples.form.card_expiry_label">Expiration</label>
                  <div class="baseline"></div>
                </div>
                <div class="field half-width">
                  <div id="example2-card-cvc" class="input empty"></div>
                  <label for="example2-card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label>
                  <div class="baseline"></div>
                </div>
              </div>
            <button type="submit" data-tid="elements_examples.form.pay_button">Pay </button>
              <div class="error" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                  <path class="base" fill="#000" d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"></path>
                  <path class="glyph" fill="#FFF" d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"></path>
                </svg>
                <span class="message"></span></div>
            </form>
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <CardHeader>
                <h2> Checkout Basket </h2>
              </CardHeader>
              <CardBody>
                <h2> Delivery Options </h2>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleAccordianChange('panel1')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>General settings</Typography>
                    <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                      maximus est, id dignissim quam.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleAccordianChange('panel2')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Users</Typography>
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                      diam eros in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleAccordianChange('panel3')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Advanced settings</Typography>
                    <Typography className={classes.secondaryHeading}>
                      Filtering has been entirely disabled for whole web server
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                      eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleAccordianChange('panel4')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Personal data</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                      eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Basket.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Basket);
