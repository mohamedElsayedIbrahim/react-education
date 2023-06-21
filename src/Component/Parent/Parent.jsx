import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {

    state = {
        products:[
            {id:0,name:'toshiba',category:'labtop',price:1200},
            {id:1,name:'lenovo',category:'labtop',price:1300},
            {id:2,name:'dell',category:'labtop',price:1350},
            {id:3,name:'hp',category:'labtop',price:1150},
        ]
    }

  render() {
    return <>
      <div className="my-3">
        <h1>Newer Products <i className="fa-brands fa-apple"></i></h1>
        <div className="row">
            {this.state.products.map((product) => <Child productInfo={product}/>)}
        </div>
      </div>
      
    </>
  }
}
