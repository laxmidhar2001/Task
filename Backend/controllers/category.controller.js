const CategorySchema = require('../model/category.model.js')

module.exports.createCategory = async (req, res) => {
    try {
        const { number, categoryname } = req.body;
        if (!number || !categoryname) {
            return res.status(400).send('Number and Category Name are required');
        }
        const newCategory = new CategorySchema({
            categoryname,
            number
        });

        await newCategory.save();
        res.status(200).send('Category created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}

module.exports.getCategory = async (req, res) => {
    try {
        const categories = await CategorySchema.find({});
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}

module.exports.updateGetCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await CategorySchema.findById(id);
        if (!category) {
            return res.status(404).send('Category not found');
        }
        res.status(200).json(category);
    }
    catch (error) {
        console.error(error);
    }
}

module.exports.updateCategory = async (req, res) => {
    try {
        const { number, categoryname, status } = req.body;
        // console.log(number, categoryname, status );
        
        if (!number || !categoryname || !status) {
            return res.status(400).send('Number, Category Name and Status are required');
        }
        const category = await CategorySchema.findByIdAndUpdate(req.params.id, { number, categoryname, status });
        if (!category) {
            return res.status(404).send('Category not found');
        }
        // category.categoryname = categoryname
        // category.number = number
        // category.staus = staus
        await category.save();
        res.status(200).send('Category updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send('ID is required');
        }
        // console.log(id);-

        const category = await CategorySchema.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).send('Category not found');
        }
        res.status(200).send('Category deleted successfully');
    }
    catch (error) {
        console.error(error);
    }
}