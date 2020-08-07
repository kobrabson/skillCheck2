import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

export class App extends Component {

  constructor(){
    super()

    this.state= {
      productList: [
        {
          id: 1,
          productName: 'Beef',
          price: '7.10',
          image:''
        },
        {
          id: 2,
          productName: 'red sauce',
          price: '2.99',
          image:''
        },
        {
          id: 3,
          productName: 'noodle',
          price: '1.29',
          image:''
        }
      ]
    }

  }


  render() {
    // console.log(this.state.productList)
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Dashboard productList={this.state.productList} />
      </div>
      );
  }
}

export default App;
