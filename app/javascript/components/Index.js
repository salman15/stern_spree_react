import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import ProductsList from "./products/ProductsList";
import axios from 'axios';

const REACT_VERSION = React.version;
const include = '?include=images';
const API = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products' + include;

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
      console.log(
        'productsData', 
        this.state.productsData
        )
  }
  render() {
    const { productsData, isLoading, error } = this.state;
    
    if (error) {
      return <p>{error.message}</p>;
    }
	 if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <React.Fragment>
    	  <h1>React version: {REACT_VERSION}</h1>
    	  <ProductsList products={this.state.productsData.data} images={this.state.productsData.included} />
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  greeting: PropTypes.string
};

export default Index