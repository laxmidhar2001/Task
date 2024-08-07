const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/tablesprint")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));


// routes import
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const SubCategoryRoutes = require('./routes/subcategory.routes')

//routes declaration
app.use('/', userRoutes);
app.use('/categorys', categoryRoutes);
app.use('/product', productRoutes);
app.use('/subcategorys', SubCategoryRoutes);

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
