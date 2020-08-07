import React, { Component } from 'react'
import './From.css'

export class Form extends Component {
    constructor(){
        super()

        this.state= {
            image: '',
            product: '',
            price: '',
            list:[]
        }

        this.cancelHandler = this.cancelHandler.bind(this)

        // this.addProductHandler= this.addProductHandler.bind(this)

    }

    imageURLHandler (value) {
        this.setState ({ image: value })
        // console.log(value)
    }

    productHandler (value) {
        this.setState ({ product: value })
        // console.log(value)
    }

    priceHandler (value) {
        this.setState ({ price: value })
        // console.log(value)
    }

    cancelHandler() {
        this.setState({
            image: '',
            product: '',
            price: ''
        })
        // console.log()
    }

    addProductHandler() {
        this.setState({
            image: '',
            product: '',
            price: ''

        })
    }

    render() {
        return (
            // <div className='form-container' >
                <div className='input-container' >
                    <p className='pra'>Image Url</p>
                    <input
                    value={this.state.image}
                    className='imageUrl input'
                    placeholder='Image URl'
                    onChange={e => this.imageURLHandler(e.target.value)}
                    type='text'

                    />
                    <p className='pra'>Product Name</p>
                    <input
                    value={this.state.product}
                    className='product input'
                    placeholder=' Name Your Here'
                    onChange={e => this.productHandler(e.target.value)}
                    type='text'

                    />
                    <p className='pra'>Price</p>
                    <input
                    value={this.state.price}
                    className='price input'
                    placeholder=' $ 0.00'
                    onChange={e => this.priceHandler(e.target.value)}
                    type='text'

                    ></input>
                    <div>
                        <button
                        className='cancelbtn'
                        onClick={this.cancelHandler}

                        >Cancel</button>

                        <button
                        className='addbtn'
                        onClick={this.addProductHandler}

                        >Add to Inventory</button>
                    </div>
                </div>
            // </div>
        )
    }
}

export default Form
