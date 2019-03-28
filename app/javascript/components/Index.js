import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import ProductsList from "./products/ProductsList";
import axios from 'axios';



const REACT_VERSION = React.version;
const API = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class Index extends React.Component {
    constructor(props){
		super(props);
		this.state = {
    		products: [],
    		isLoading: false,
    		error: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(API)
      .then(result => this.setState({
        products: result.data.data,
        productsData: result.data.data.attributes,
        isLoading: false,
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
      console.log('products', this.state.products.map(product => {product.relationships.images.data.type} ))
  }
  render() {
    const { products, isLoading, error } = this.state;
    
    if (error) {
      return <p>{error.message}</p>;
    }
	 if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <React.Fragment>
    	  <h1>React version: {REACT_VERSION}</h1>
    	  <ProductsList products={this.state.products} />
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  greeting: PropTypes.string
};

export default Index