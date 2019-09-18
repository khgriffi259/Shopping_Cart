import React, { Component } from 'react';
import CardProduct from '../Material-UI/CardProduct';

class Product extends Component {
    state = {

    }

    render() {
        const { product, addToCart } = this.props;
        return (
            <div> 
                <CardProduct 
                    product={product}
                    addToCart={addToCart}
                />
            </div>
        )
    }
}

export default Product;