import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import axios from 'axios';
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import ProductSlider from "./ProductSlider";
import Loading from "../shared/Loading";

const REACT_VERSION = React.version;
const include = '?include=images';
const API = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products' + include;

class ProductsIndex extends React.Component {
   constructor(props){
		super(props);
		this.state = {
    		productsData: {},
    		isLoading: true,
    		error: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(API)
      .then(result => this.setState({
        productsData: result.data,
        isLoading: false,
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
      
  }
  
  render() {
    const { productsData, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
	 if (isLoading) {
      return <Loading/>;
    }
    return (
      <React.Fragment>
      {console.log('productsData2',this.state.productsData.included)}
            <ProductSlider products={this.state.productsData.data} images={this.state.productsData.included} />
            <ProductsList  />
      	    
      	    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </React.Fragment>
    );
  }
}

ProductsGrid.propTypes = {
  greeting: PropTypes.string
};


export default ProductsIndex
