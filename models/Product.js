const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: 0.0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;