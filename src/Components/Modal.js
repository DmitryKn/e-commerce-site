import React, { Component } from 'react';
import {ProductConsumer} from '../store';
import {ButtonContainer, ModalContainer} from './Styled';
import {Link} from 'react-router-dom';


class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if( modalOpen ) {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>items added to the cart</h5>
                                            <img src={img} alt="pic" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Price: $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cartStyle onClick={() => closeModal()}>
                                                    Go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    } else {
                        return null
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;