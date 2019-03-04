import React from 'react';
import CartItem from './CartItem'

const CartList = ({value}) => {
    return (
        <div className="container-fluid">
            {value.cart.map(elem => {
                return (
                    <CartItem
                        key={elem.id}
                        item={elem}
                        value={value}
                    />
                )
            })}
        </div>
    );
};

export default CartList;