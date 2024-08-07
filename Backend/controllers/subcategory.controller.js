const SubCategory = require('../model/subcategory.model')

module.exports.createSubCategory = async (req, res) => {
    try {
        const { subcategoryname, categoryname, number } = req.body
        if (!subcategoryname || !categoryname || !number) {
            return res.status(400).send('Sub Category Name, Category Name and Number are required')
        }
        const newSubCategory = new SubCategory({
            subcategoryname,
            categoryname,
            number
        })
        await newSubCategory.save()
        res.status(200).send('Sub Category created successfully')
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}

module.exports.getSubCategory = async (req, res) => {
    try {
        const subcategories = await SubCategory.find({})
        res.status(200).json(subcategories)
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}

module.exports.updateGetSubCategory = async (req, res) => {
    try {
        const id = req.params.id
        const subcategory = await SubCategory.findById(id)
        if (!subcategory) {
            return res.status(404).send('Sub Category not found')
        }
        res.status(200).json(subcategory)
    }
    catch (error) {
        console.error(error)
    }
}

module.exports.updateSubCategory = async (req, res) => {
    try {
        const { subcategoryname, categoryname, status, number } = req.body
        if (!subcategoryname || !categoryname || !status || !number) {
            return res.status(400).send('Sub Category Name, Category Name, Status and Number are required')
        }
        const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, { subcategoryname, categoryname, status, number })
        if (!subcategory) {
            return res.status(404).send('Sub Category not found')
        }
        // subcategory.subcategoryname = subcategoryname
        // subcategory.categoryname = categoryname
        // subcategory.status = status
        // subcategory.number = number
        await subcategory.save()
        res.status(200).send('Sub Category updated successfully')
    }
    catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}

module.exports.deleteSubCategory = async (req, res) => {
    try {
        const id = req.params.id
        const subcategory = await SubCategory.findByIdAndDelete(id)
        if (!subcategory) {
            return res.status(404).send('Sub Category not found')
        }
        res.status(200).send('Sub Category deleted successfully')
    }
    catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}
