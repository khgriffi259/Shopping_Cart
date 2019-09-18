import React from 'react';
import Product from './Product';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    productList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20
    }
}

const ProductList = ({ classes, products, addToCart }) => (
    <div className={classes.productList}>
        {products && products.map(product => (
            <Product 
                key={product._id} 
                product={product} 
                addToCart={addToCart}
            />)
        )}
    </div>
);

export default withStyles(styles)(ProductList);