import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext(); //Provider //Consumer

class ProductProvider extends Component {
    state={
        products: [],   //better not to do - products: storeProducts
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() { //run fix
        this.setProducts();
    }

    setProducts = () => { //fix if we need to change default state.data
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]; //временный массив
        const index = tempProducts.indexOf(this.getItem(id)); //индекс=айди
        const product = tempProducts[index]; //индекс массива
        product.inCart = true; //меняем значение на тру
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    cart: [...this.state.cart, product] }
            },
            () => {this.addTotals()}
        )
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false}
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(elem => elem.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState({
            cart: [...tempCart]
        }, () => {
            this.addTotals()
        }
        )}

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(elem => elem.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if(product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState({
                cart: [...tempCart]
            }, () => {
                this.addTotals()
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(elem => {
            return elem.id !== id
        })
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState({
            cart: [...tempCart],
            products: [...tempProducts]
        }, ()=> {
            this.addTotals()
        })
    }

    clearCart = (id) => {
        this.setState({
            cart: [] //cart is empty, but buttons are not. Total price is wrong too.
        }, () => {
            this.setProducts(); //gives default copies of objects
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(elem => (
            subTotal += elem.total
        ))
        const tempTax = subTotal * 0.13;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = (subTotal + tax).toFixed(2);
        this.setState ({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};