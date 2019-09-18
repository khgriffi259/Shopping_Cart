const mongoose = require('mongoose');
const products = require('./products');
const db = require('./models');

const seed = async () => {
    try {
        await db.Product.remove();
        console.log('REMOVE ALL PRODUCTS');

        await Promise.all(
            products.map(async product => {
                await db.Product.create(product);
            })
        );
        console.log('CREATED PRODUCTS: ', products);

    } catch (err) {
        console.log(err);
    }
};

seed();
