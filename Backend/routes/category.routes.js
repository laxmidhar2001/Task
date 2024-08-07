const express = require('express');
const { createCategory, getCategory, updateGetCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');
const router = express.Router();

router.route("/addcategorys")
    .post(createCategory)
    .get(getCategory)
    
router.route("/updatecategory/:id")
    .get(updateGetCategory)

router.route("/addcategorys/:id")
    .put(updateCategory)
    .delete(deleteCategory)

module.exports = router;