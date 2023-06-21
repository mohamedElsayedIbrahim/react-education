import React, { Component } from 'react'

export default class Child extends Component {

    // {console.log(this.props)}
  render() {
    let {name,price,category} = this.props.productInfo;
    return <>
    
        <div className="col-md-3">
            <div className='bg-info p-2'>
                <h1>{name}</h1>
                <h4>{category}</h4>
                <h5>{price}</h5>
            </div>
        </div>
    
    </>
  }
}
