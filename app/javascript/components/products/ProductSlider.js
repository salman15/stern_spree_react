import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import Cards from "./cards/Cards.js";

const image1 = "https://volksshop.nl/wp-content/uploads/2019/04/Se-final.png";
const image2 = "https://volksshop.nl/wp-content/uploads/2019/04/Redmi-banner-final.png";
const image3 = "https://volksshop.nl/wp-content/uploads/2019/03/banner-lente-actie-2-2.png";

class ProductSlider extends React.Component {
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section} style={{padding: "35px"}}>
      
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
            
            <GridItem xs={4} sm={4} md={3} className={classes.marginAuto}>
              <Cards  products={this.state.products} images={this.state.images}/>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(ProductSlider);
