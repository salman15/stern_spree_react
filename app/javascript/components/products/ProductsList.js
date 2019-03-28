import React from "react"
import PropTypes from "prop-types"

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ProductsList extends React.Component {
  constructor(props) {
        super(props);
        const { products } = this.props;
        this.state = {
            products
        };
    }
  render () {
    return (
      <React.Fragment>
        <ul>
          <p>Shop Products</p>
          
          {this.state.products.map(product =>
            <li key={product.objectID}>
              <p>{product.attributes.price}</p>
                <Card>
  			      <CardActionArea>
  			        <CardMedia
  			          
  			          image={product.relationships.images.data.type}
  			          title={product.attributes.name}
  			        />
  			        <CardContent>
  			          <Typography gutterBottom variant="h5" component="h2">
  			           {product.attributes.name}
  			          </Typography>
  			          <Typography component="p">
  			            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
  			            across all continents except Antarctica
  			          </Typography>
  			        </CardContent>
  			      </CardActionArea>
  			      <CardActions>
  			        <Button size="small" color="primary">
  			          Share
  			        </Button>
  			        <Button size="small" color="primary">
  			          Learn More
  			        </Button>
  			      </CardActions>
  			    </Card>
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  greeting: PropTypes.string
};
export default ProductsList
