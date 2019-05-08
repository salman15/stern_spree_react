import React from "react"
// Switch router 
import { Switch, Route } from 'react-router-dom'
// Components
import ProductsIndex from './products/ProductsIndex'
import About from './static/About'

class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route exact path='/' component={ProductsIndex}/>
            <Route exact path='/About' component={About}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Main
