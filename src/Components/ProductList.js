import React, { Component } from 'react';
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../store'

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title
                        name='our'
                        title='products'
                    />
                    <ProductConsumer>
                        {(data) => {
                            return data.products.map(elem => {
                                return (
                                    <Product
                                        key={elem.id}
                                        title={elem.title}
                                        image={elem.image}
                                        price={elem.price}
                                        company={elem.company}
                                        handleDetail={elem.handleDetail}
                                    />
                                )
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default ProductList;