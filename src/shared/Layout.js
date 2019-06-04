import React from 'react'
import Navv from './Nav'
import Footer from './Footer'

const Layout = props => (
  <div>
    <Navv />
    {props.children}
    <Footer />
  </div>
)

export default Layout
