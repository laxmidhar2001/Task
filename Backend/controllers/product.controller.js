const Product = require('../model/product.model')

module.exports.createProduct = async (req, res) => {
    try {
        const { categoryname, subcategoryname, productname } = req.body
        if (!categoryname || !subcategoryname || !productname) {
            return res.status(400).send('Category Name, Sub Category Name and Product Name are required')
        }
        const newProduct = new Product({
            categoryname,
            subcategoryname,
            productname
        })
        await newProduct.save()
        res.status(200).send('Product created successfully')
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}

module.exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}

module.exports.updateGetProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send('Product not found')
        }
        res.status(200).json(product)
    }
    catch (error) {
        console.error(error)
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        const { categoryname, subcategoryname, productname, status } = req.body
        if (!categoryname || !subcategoryname || !productname || !status) {
            return res.status(400).send('Category Name, Sub Category Name, Product Name and Status are required')
        }
        const product = await Product.findByIdAndUpdate(req.params.id, { categoryname, subcategoryname, productname, status })
        if (!product) {
            return res.status(404).send('Product not found')
        }
        // product.categoryname = categoryname
        // product.subcategoryname = subcategoryname
        // product.productname = productname
        // product.status = status
        await product.save()
        res.status(200).send('Product updated successfully')
    }
    catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
        
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).send('Product not found')
        }
        res.status(200).send('Product deleted successfully')
    }
    catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}