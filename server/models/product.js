const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    sku: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    availableSize: [String],
    price: {
        type: Number,
        required: true
    },
    isFreeShipping: Boolean
});

module.exports = mongoose.model('Product', productSchema);