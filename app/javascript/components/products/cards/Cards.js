import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const url = "https://stern-telecom-react-salman15.c9users.io";
const productUrl = "/products/";

const image1 = "https://volksshop.nl/wp-content/uploads/2019/04/Se-final.png";
const image2 = "https://volksshop.nl/wp-content/uploads/2019/04/Redmi-banner-final.png";
const image3 = "https://volksshop.nl/wp-content/uploads/2019/03/banner-lente-actie-2-2.png";

const style = {
  ...imagesStyles,
  cardTitle,
  center: {
    justifyContent: 'space-around',
    textAlign: 'center',
  },
};

class Cards extends React.Component {
   constructor(props) {
    super(props);
    const { products, images } = this.props;
    
    this.state = {
      products,
      images,
     
    };
   
  }
  
  render() {
    const { classes } = this.props;
    const { products, images } = this.state;
    const filterData = products.filter(function(obj) {
            return obj.attributes.meta_keywords === 'side';
            });
    console.log('filterData',filterData)
    return (

      <div>
        {filterData.map(product =>

          <Card  className={classes.center} style={{width: "20rem"}} rows={1} key={product.id}>
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
              <h4 className={classes.cardTitle}>
                {product.attributes.display_price}
              </h4>
              <Button color="primary" href={url + productUrl + product.attributes.slug }>
                  View
              </Button>
            </CardBody>
          </Card>
        )}
      </div>
    );
  }
}

export default withStyles(style)(Cards);