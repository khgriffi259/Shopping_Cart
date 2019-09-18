import React, { Component } from 'react';
import SimpleCard from '../components/Material-UI/SimpleCard';


class Cart extends Component {
    
    render() {
        const { cartItems, addToCart, removeFromCart } = this.props;
        return (
            <div>
                <SimpleCard 
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                />
            </div>
        )
    }
}

export default Cart;
