const express = require('express')
const { 
    createProduct, 
    deleteProduct, 
    getProduct, 
    getProducts, 
    updateProduct } = require("../controller/productController");


const productRoute = express.Router();


productRoute.route('/').get(getProducts).post(createProduct)
productRoute.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = productRoute;
