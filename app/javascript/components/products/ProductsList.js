import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//API settings
    var filter1 = '';
    var filter2 = '';
    var filter3 = '';
    let filter4 = '';
    let filter5 = '';
    let filter6 = '';
    var filter7 = '';
    var filter8 = '';
    var filter9 = '';
    let filter10 = '';
    let filter11 = '';
    let filter12 = '';
    let filter13 = '';
    let mi = false;
    let redmi = false;
    let go = false;
    
const include = '?include=images';
const API = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products' + include + '&'+ filter1 + '&'+ filter2 + '&'+ filter3 + '&'+ filter4 + '&'+ filter5 + '&'+filter6;
//

  import { makeClient } from '@spree/storefront-api-v2-sdk/dist/client';
  

async function asyncCall() {
  console.log('calling');

  // When using the SDK in a <script> tag or as part of a Webpack bundle
  // targeted for the browser, instead use:
  // import { makeClient } from '@spree/storefront-api-v2-sdk/dist/client'
  
  const client = makeClient({
    host: 'https://stern-telecom-react-salman15.c9users.io/'
  });

  console.log(client)

  const createCart = await client.cart.create()


  const orderToken = response.data.attributes.token

  const addToCart = await client.cart.addItem({ orderToken }, {
    variant_id: '1',
    quantity: 1
  })
  
  console.log('orderToken',orderToken,'createCart',createCart);
  // expected output: 'resolved'
}

asyncCall();

//Axios
import axios from 'axios';
//Loading
import Loading from "../shared/Loading";
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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
  },
  productContainer: {
    minWidth: '45vw',
  }
});


class ProductsList extends React.Component {
    constructor(props) {
    super(props);
    const { classes } = props;
    const { products, images } = this.props;
    const filteredproducts = '' ;
    
    const include = '?include=images';
    const url = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products';
    const taxons = 'filter[taxons]=';
    
    let mi = false;
    let redmi = false;
    let go = false;
    
    this.state = {
      productsData: {},
      isLoading: true,
    	error: null,
      products,
      images,
      classes,
      filteredproducts : products,
      expanded: null,
      include: '?include=images',
      url: 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products',
      taxons: 'filter[taxons]=',
      mi: false,
      redmi: false,
      go: false,
      gb16: false,
      gb32: false,
      gb64: false,
      gb128: false,
      gb256: false,
      Zwart: false,
      Blauw: false,
      Rood: false,
      Roze: false,
      Paars: false,
      API: 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products' + include,
    };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(this.state.API)
      .then(result => this.setState({
        productsData: result.data,
        filteredproducts: result.data.data,
        images: result.data.included,
        isLoading: false,
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
    if ( this.state.isloading == false) {
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
  };
  


  
  
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  
    handleFormChange = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });
    
    let miTrue = [name] == "mi" ? event.target.checked : false; 
    
    let filter1 = miTrue === true ? "1," : '';
    
    console.log('fase 1', 'true', miTrue ,'filter', filter1 ,filter2 , filter3  )
    //call on the new filter
    this.checkFilter();
    
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange1 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });
    
    let miTrue = [name] == "mi" ? event.target.checked : false; 
    
    filter1 = miTrue === true ? "1," : '';
    
    console.log('fase 1', 'true', miTrue ,'filter', filter1   )
    //refresh the productlist
    this.refreshList();
    
  };
  
    handleFormChange2 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });
    
    let redmiTrue = [name] == "redmi" ? event.target.checked : false; 
    
    filter2 = redmiTrue === true ? "3," : '';
    
    console.log('fase 1', 'true', redmiTrue ,'filter', filter2   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange3 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let goTrue = [name] == "go" ? event.target.checked : false; 

    filter3 = goTrue === true ? "4,": '';
    
    console.log('fase 1', 'true', goTrue ,'filter', filter3  )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange4 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let gb16True = [name] == "gb16" ? event.target.checked : false; 

    filter4 = gb16True === true ? "6,": '';
    
    console.log('fase 1', 'true', gb16True ,'filter',  filter4   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange5 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let gb32True = [name] == "gb32" ? event.target.checked : false; 

    filter5 = gb32True === true ? "5,": '';
    
    console.log('fase 1', 'true', gb32True ,'filter', filter5 , )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange6 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let gb64True = [name] == "gb64" ? event.target.checked : false; 

    filter6 = gb64True === true ? "7,": '';
    
    console.log('fase 1', 'true', gb64True ,'filter', filter6   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange7 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let gb128True = [name] == "gb128" ? event.target.checked : false; 

    filter7 = gb128True === true ? "8,": '';
    
    console.log('fase 1', 'true', gb128True ,'filter7', filter7  )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange8 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let gb256True = [name] == "gb256" ? event.target.checked : false; 

    filter8 = gb256True === true ? "9,": '';
    
    console.log('fase 1', 'true', gb256True ,'filter8', filter8   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange9 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let ZwartTru = [name] == "Zwart" ? event.target.checked : false; 

    filter9 = ZwartTru === true ? "10,": '';
    
    console.log('fase 1', 'true', ZwartTru ,'filter9',filter9  )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange10 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let BlauwTrue = [name] == "Blauw" ? event.target.checked : false; 

    filter10 = BlauwTrue === true ? "11,": '';
    
    console.log('fase 1', 'true', BlauwTrue ,'filter10', filter10   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange11 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let RoodTrue = [name] == "Rood" ? event.target.checked : false; 

    filter11 = RoodTrue === true ? "12,": '';
    
    console.log('fase 1', 'true', RoodTrue ,'filter11', filter11   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  handleFormChange12 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let RozeTrue = [name] == "Roze" ? event.target.checked : false; 

    filter12 = RozeTrue === true ? "13,": '';
    
    console.log('fase 1', 'true', RozeTrue ,'filter12',  filter12   )
    //refresh the productlist
    this.refreshList();
    
  };
  
    handleFormChange13 = name => event => {
    
    //Change filter's value when the button's value has changed to true or false
    this.setState({ 
      isLoading: true, 
      [name]: event.target.checked,
    });

    let PaarsTrue = [name] == "Paars" ? event.target.checked : false; 

    filter13 = PaarsTrue === true ? "14,": '';
    
    console.log('fase 1', 'true', PaarsTrue ,'filter13', filter13   )
    //refresh the productlist
    this.refreshList();
    
  };
  
  refreshList(){
    
    //Get new data request from API with new filter value's
    axios.get(this.state.url + this.state.include + '&'+ this.state.taxons + filter1 + filter2 + filter3 + filter4 + filter5 + filter6 + filter7 + filter8 + filter9 + filter10 + filter11 + filter12 + filter13 )
    .then(result => this.setState({
      productsData: result.data,
      filteredproducts: result.data.data,
      images: result.data.included,
      isLoading: false,
    }))
    .catch(error => this.setState({
      error,
      isLoading: false
    }));
    //check the value passed on, the value of the event target and if the state has been changed. 
    console.log('fase 3',this.state.mi,this.state.redmi, this.state.go )
  }
  

  
  
  render () {
    const {productsData, isLoading, error, products, images, expanded, filteredproducts } = this.state;
    
    return (
      <React.Fragment>
        <div className={this.state.classes.root}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} className={this.state.classes.marginAuto}>
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
                            checked={this.state.mi}
                            onChange={this.handleFormChange1('mi')}
                            value="1,"
                          />
                        }
                        label="Mi"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.redmi}
                            onChange={this.handleFormChange2('redmi')}
                            value="3,"
                          />
                        }
                        label="Redmi"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.go}
                            onChange={this.handleFormChange3('go')}
                            value="4,"
                          />
                        }
                        label="Go"
                      />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                  </FormControl>
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
                              checked={this.state.gb16}
                              onChange={this.handleFormChange4('gb16')}
                              value="16GB"
                            />
                          }
                          label="16GB"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.gb32}
                              onChange={this.handleFormChange5('gb32')}
                              value="32GB"
                            />
                          }
                          label="32GB"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.gb64}
                              onChange={this.handleFormChange6('gb64')}
                              value="64GB"
                            />
                          }
                          label="64GB"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.gb128}
                              onChange={this.handleFormChange7('gb128')}
                              value="128GB"
                            />
                          }
                          label="128GB"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.gb256}
                              onChange={this.handleFormChange8('gb256')}
                              value="256GB"
                            />
                          }
                          label="256GB"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                  </FormControl>
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
                            checked={this.state.Zwart}
                            onChange={this.handleFormChange9('Zwart')}
                            value="Zwart"
                          />
                        }
                        label="Zwart"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.Blauw}
                            onChange={this.handleFormChange10('Blauw')}
                            value="jason"
                          />
                        }
                        label="Blauw"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.Rood}
                            onChange={this.handleFormChange11('Rood')}
                            value="Rood"
                          />
                        }
                        label="Rood"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.Roze}
                            onChange={this.handleFormChange12('Roze')}
                            value="Roze"
                          />
                        }
                        label="Roze"
                      />
                    </FormGroup>
                    <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.Paars}
                            onChange={this.handleFormChange13('Paars')}
                            value="Paars"
                          />
                        }
                        label="Paars"
                      />
                    <FormHelperText>Be careful</FormHelperText>
                  </FormControl>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                
            </GridItem>
          {
             (error) ? (
                <GridItem xs={12} sm={12} md={10} className={this.state.classes.productContainer}> 
                  <p>{error.message}</p>
                </GridItem> 
            ): (isLoading) ?  (
                  <GridItem xs={12} sm={12} md={10} className={this.state.classes.productContainer}> 
                      <Loading/>
                  </GridItem>
            ): (isLoading) == false ? (
              <GridItem xs={12} sm={12} md={10} className={this.state.classes.productContainer}> 
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
                        <Button color="secondary" onClick={()=>{this.addToCart()}}>
                          <AddShoppingCartIcon/>
                        </Button>
                      </CardBody>
                    </Card>
                  </GridListTile>
                  )}
                </GridList>
              </GridItem>
            ) : (isLoading)
          }
        </GridContainer>
      </div> 
    </React.Fragment>
    )
  }
}

ProductsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsList);
