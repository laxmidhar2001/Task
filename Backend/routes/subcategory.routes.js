const express = require('express')
const { createSubCategory, getSubCategory, updateGetSubCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subcategory.controller');
const router = express.Router();

router.route("/addsubcategories")
    .post(createSubCategory)
    .get(getSubCategory)
    
router.route("/updatesubcategory/:id")
    .get(updateGetSubCategory)

router.route("/addsubcategories/:id")
    .put(updateSubCategory)
    .delete(deleteSubCategory)

module.exports = router