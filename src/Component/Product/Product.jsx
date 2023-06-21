import React, { Component } from 'react'

export default class Product extends Component {
    
    state = {
        userName: 'mohamed'
    }


  render() {
    return <>
      <div>{this.state.userName}</div>
    </>
    
  }
}
