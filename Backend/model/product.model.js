const mongoose =  require('mongoose');

const ProductSchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true
    },
    subcategoryname: {
        type: String,
        required: true
    },
    productname: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Product', ProductSchema)