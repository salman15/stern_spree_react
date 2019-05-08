import React, { Component } from 'react';
import ReactDOM from "react-dom";

// React Router
import { Switch, Route } from 'react-router-dom';

//Components
import Header from "./shared/Header";
import Main from "./Main";
import Footer from "./shared/Footer";
import "assets/scss/material-kit-react.scss?v=1.4.0";

class Index extends React.Component {
      
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index