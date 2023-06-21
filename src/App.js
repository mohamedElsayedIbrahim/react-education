import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Product from './Component/Product/Product'
import Parent from './Component/Parent/Parent'

export default class App extends Component {
  render() {
    return <>
      <Navbar />

      <div className='container'>
        

        < Parent />
      </div>


      <Footer />
    </>
    
  }
}

