import React, { Component } from 'react';
import styled from './Styled'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../store'

class Product extends Component {

    state = {
        title: this.props.title
    }

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    {this.state.title}
                </div>
            </div>
        );
    }
}

export default Product;