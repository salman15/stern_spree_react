// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM, { render } from 'react-dom'
// Browser Router
import { BrowserRouter } from 'react-router-dom'
// Index
import Index from '../components/Index'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>
            
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </React.Fragment>,
    document.body.appendChild(document.createElement('div')),
  )
})
