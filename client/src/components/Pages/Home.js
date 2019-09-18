import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import api from '../../services/api';

import ProductList from '../Products/ProductList';
import Filter from '../Filter';
import Cart from '../Cart';

class Home extends Component {
    
    state = {
        products: [],
        filteredProducts: [],
        cartItems: []
    }
    
    async componentDidMount(){
        const products = await api.call('get', 'products');
        this.setState({products, filteredProducts:products});

        if (localStorage.getItem("cartItems")) {
            this.setState({cartItems: JSON.parse(localStorage.getItem("cartItems"))});
        }
    }

    handleChangeSort = e => {
        this.setState({
            sort: e.target.value
        });
        this.listProducts();
    }

    handleChangeGameConsole = e => {
        this.setState({
            gameConsole: e.target.value
        });
        this.listProducts();
    }

    listProducts = () => {
        
        this.setState(state => {
            if (state.sort){
                state.products.sort((a,b) => (state.sort === 'ascending') ? (a.price > b.price ? 1: -1) : (a.price < b.price ? 1: -1))
            } else {
                state.products.sort((a,b) => (a.id < b.id ? 1 : -1));
            }

            if (state.gameConsole){
                return {
                    filteredProducts: state.gameConsole === 'All' ? state.products : state.products.filter(product => product.description.includes(state.gameConsole))
                }
            }
            
            return { filteredProducts: state.products };
        })
    }

    addToCart = (e, product) => {
        const { cartItems } = this.state;
        let productAlreadyInCart = false;
        
        cartItems.map(item => {
            if (item._id === product._id){
                productAlreadyInCart = true;
                item.count++;
                this.setState({cartItems});
            };
        })
        
        if (!productAlreadyInCart){
            cartItems.push({...product, count: 1});
            this.setState({cartItems});
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    
    removeFromCart = (e, product) => {
        const cartItems = this.state.cartItems.filter(item => item._id !== product._id);
        this.setState({cartItems: cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }


    render(){
        const { gameConsole, sort, filteredProducts, cartItems } = this.state;

        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={12} md={8} style={{marginTop: 30, padding: 20}}>
                        <Filter 
                            gameConsole={gameConsole} 
                            sort={sort} 
                            changeGameConsole={this.handleChangeGameConsole} 
                            changeSort={this.handleChangeSort}
                            count={filteredProducts.length}
                        />
                        <hr />
                        <ProductList 
                            products={filteredProducts}
                            addToCart={this.addToCart}
                            removeFromCart={this.removeFromCart}
                        />
                    </Grid>        
                    <Grid item xs={12} md={4} style={{marginTop: 30}}>
                        <Cart 
                            cartItems={cartItems}
                            removeFromCart={this.removeFromCart}
                        />
                    </Grid>  
                </Grid>      
            </div>
        )
    }
}


export default Home;