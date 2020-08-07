import React, { Component } from 'react';
import Product from '../Product/Product'
import './Dasboard.css'

export class Dashboard extends Component {
    render() {
        // console.log(this.props.productList)
        return (
            
            
            <div>
                <h1>Dashboard</h1>
                { this.props.productList.map((products) => (
                    <Product key={products.id} products={products} />
                  ) )}
            </div>
        )
    }
}

export default Dashboard;
