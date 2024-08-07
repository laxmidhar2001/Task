const express = require('express');
const { createProduct, getProduct, updateGetProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

router.route("/addproducts")
    .post(createProduct)
    .get(getProduct)
    
router.route("/updateproduct/:id")
    .get(updateGetProduct)

router.route("/addproducts/:id")
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router