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

const url = "https://stern-telecom-react-salman15.c9users.io"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    const { products, images } = this.props;
    this.state = {
      products,
      images,
      classes
    };
  }
  render () {
    const { products, images } = this.state;
    
    return (
      <React.Fragment>
        <ul>
          <p>Shop Products</p>
          {
          products.map(product =>
            <li key={product.key}>
            <Card className={this.state.classes.card}>
  			      <CardActionArea>
    			      {product.relationships.images.data.map(({ id }) => {
                    let image = images.find(image => image.id == id >=1);
                    return image ? (
                      <CardMedia
                        className={this.state.classes.media}
        			          image= {`${url}/${image.attributes.styles[3].url}`}
        			        />
                    ) : null;
                  })}
  			        
  			        <CardContent>
  			          <Typography gutterBottom variant="h5" component="h2">
  			           {product.attributes.name}
  			          </Typography>
  			          <Typography component="p">
  			            {product.attributes.name}
  			          </Typography>
  			        </CardContent>
  			      </CardActionArea>
  			      <CardActions>
  			        <Button size="small" color="primary">
  			         {product.attributes.display_price} 
  			        </Button>
  			        <Button size="small" color="primary">
  			          add to cart
  			        </Button>
  			      </CardActions>
  			    </Card>
            </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  greeting: PropTypes.string
};
export default withStyles(styles)(ProductsList);
