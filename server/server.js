require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models');

const PORT = process.env.PORT;

app.use(cors());
app.get('/api/products', async (req, res) =>{
    try {
        const products = await db.Product.find();
        res.json(products);
    } catch (error) {
        error.message = "No products";
        res.status(404).json({error: error.message});
    }
})


app.listen(process.env.PORT, ()=> {
  console.log(`server listening on port ${PORT}`);
})