import React from "react"
import PropTypes from "prop-types"
class ProductsList extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  greeting: PropTypes.string
};
export default ProductsList
