import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext(); //Provider //Consumer

class ProductProvider extends Component {
    state={
        products: [],   //Здесь лучше не вставлять products: storeProducts
        detailProduct: detailProduct
    }
    componentDidMount() { //запуск функции фикса
        this.setProducts();
    }
    setProducts = () => { //фикс для починки того, что мы посылаем данные через пропсы. Мы не копируем их, а постоянно обновляем их
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }
    handleDetail = () => {
        console.log('detail');
    }
    addToCart = () => {
        console.log('cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};