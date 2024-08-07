const mongoose = require('mongoose')

const SubCategorySchema = new mongoose.Schema({
    subcategoryname: {
        type: String,
        required: true
    },
    categoryname: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    number: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('SubCategory', SubCategorySchema)