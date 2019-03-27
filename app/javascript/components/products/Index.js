import React, { Component } from 'react';
import PropTypes from "prop-types"
import ProductsList from "./ProductsList"

// const data = [
// 		{
// 		'id': 1,
// 		'type': 'test'
			
// 		}
// 	]
	
const API = 'https://stern-telecom-react-salman15.c9users.io/api/v2/storefront/products';
const DEFAULT_QUERY = 'redux';

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

    fetch(API)
     .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ products: data.data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
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
      <ul>
      <p>Shop Products</p>
        {products.map(product =>
          <li key={product.objectID}>
            <a href={product.id}>{product.type}</a>
          </li>
        )}
      </ul>
    );
  }
}

ProductsList.propTypes = {
  greeting: PropTypes.string
};
export default Index