import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//API settings
const include = '?include=images';
const API = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products' + include;
//Axios
import axios from 'axios';
//Loading
// Material UI
import { withStyles } from '@material-ui/core/styles';
// Material UI Grid
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// Material UI Tooltip
import Tooltip from '@material-ui/core/Tooltip';
// Material UI buttons
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Material UI Expansion
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
//Material UI Form
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
//Material Kit Card
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
//Material Kit Button
import Button from "components/CustomButtons/Button.jsx";
//Material Kit Grid
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//Material Kit Slider
import nouislider from "./nouislider";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const url = "https://stern-telecom-react-salman15.c9users.io";
const productUrl = "/products/";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    width: '60%',
    margin: '0 auto',
  },
  gridList: {
    width: '100%',
    margin: '0 auto'
    // height: 450,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'rgba(0, 0, 0, 0)',
  },
   button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  card: {
    width: '20rem !important',
    height: 'auto !important',
    margin: 5,
    marginTop: 30,
    justifyContent: 'space-around',
  },
  center: {
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  ...imagesStyles,
  cardTitle,
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  sliderContainer: {
    width: '100%',
    height: 20
  }
});


class ProductsGrid extends React.Component {
    constructor(props) {
    super(props);
    const { classes } = props;
    const { products, images } = this.props;
    const filteredproducts = '' ;
    this.state = {
      products,
      images,
      classes,
      filteredproducts : products
    };
  }
  state = {
    expanded: null,
    gilad: true,
    jason: false,
    antoine: true,
    gilad1: true,
    jason1: false,
    antoine1: true,
  };
  
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  
  handleFormChange = name => event => {
    this.setState(
      { 
        [name]: event.target.checked,
      }
    );
  };
  
  componentDidMount() {
    nouislider.create(this.refs.slider2, {
      start: [0, 100],
      connect: [false, true, false],
      step: 1,
      range: { 
        min: 0, 
        max: 100 
      }
    });
  }
  
  render () {
    const { products, images, expanded, filteredproducts } = this.state;
    return (
      <React.Fragment>
        <div className={this.state.classes.root}>
         <GridContainer>
            <GridItem xs={12} sm={12} md={3} className={this.state.classes.marginAuto}>
            
              <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={this.state.classes.heading}>Model</Typography>
                  <Typography className={this.state.classes.secondaryHeading}>Redmi, Go, Mi, Pro</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                 <FormControl component="fieldset">
                  <FormLabel component="legend">Assign responsibility</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.gilad}
                          onChange={this.handleFormChange('gilad')}
                          value="gilad"
                        />
                      }
                      label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.jason}
                          onChange={this.handleFormChange('jason')}
                          value="jason"
                        />
                      }
                      label="Jason Killian"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.antoine}
                          onChange={this.handleFormChange('antoine')}
                          value="antoine"
                        />
                      }
                      label="Antoine Llorca"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              
              <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={this.state.classes.heading}>Advanced settings</Typography>
                  <Typography className={this.state.classes.secondaryHeading}>
                    Filtering has been entirely disabled for whole web server
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={this.state.classes.sliderContainer}>
                    <div className="slider-info noUi-active" ref="slider2"  />
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              
              <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={this.state.classes.heading}>Users</Typography>
                  <Typography className={this.state.classes.secondaryHeading}>
                    You are currently not an owner
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <FormControl component="fieldset">
                  <FormLabel component="legend">Assign responsibility</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.gilad1}
                          onChange={this.handleFormChange('gilad1')}
                          value="gilad"
                        />
                      }
                      label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.jason1}
                          onChange={this.handleFormChange('jason1')}
                          value="jason"
                        />
                      }
                      label="Jason Killian"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.antoine1}
                          onChange={this.handleFormChange('antoine1')}
                          value="antoine"
                        />
                      }
                      label="Antoine Llorca"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              
            </GridItem>
            <GridItem xs={12} sm={12} md={9} className={this.state.classes.marginAuto}> 
              <GridList cellHeight={180}  cols={4} className={this.state.classes.gridList}>
                {filteredproducts.map(product =>
                <GridListTile className={this.state.classes.card}  rows={1} key={product.id}>
                  <Card  rows={1} className={this.state.classes.center}>
                    <CardHeader color="warning">
                      {product.attributes.name}
                    </CardHeader>
                    <CardBody>
                      {product.relationships.images.data.length > 0 &&
                          (() => {
                            const { id } = product.relationships.images.data[0];
                            const image = images.find(image => image.id == id);
                            return image ? (
                			        <img key={images.key} src={`${url}/${image.attributes.styles[2].url}`} />
                            ) : null;
                          })()}
                      <h4 className={this.state.classes.cardTitle}>
                        {product.attributes.display_price}
                      </h4>
                      <Button color="primary" href={url + productUrl + product.attributes.slug }>
                          View
                      </Button>
                    </CardBody>
                  </Card>
                </GridListTile>
                )}
            </GridList>
          </GridItem>
        </GridContainer>
      </div>
      </React.Fragment>
    );
  }
}

ProductsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsGrid);
