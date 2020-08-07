import React, { Component } from 'react';
import Product from '../Product/Product'
import './Dasboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Product/>
            </div>
        )
    }
}

export default Dashboard;
