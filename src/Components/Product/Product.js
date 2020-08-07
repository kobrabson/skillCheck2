
import React, { Component } from 'react'

export class Product extends Component {
    render() {
        const {productName, price } = this.props.products
        return (
            <div>
                <h2> { productName } { price } </h2>
            </div>
        )
    }
}

export default Product
