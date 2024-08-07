import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Product from '../assets/product.svg'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Productdata = () => {
  let [products, setProducts] = useState([])
  let [flag, setFlag] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/product/addproducts')
      .then((res) => {
        setProducts(res.data)
        setFlag(false)
      })
      .catch((err) => {
        console.log(err);
      })
  },[flag])
  

  const delProduct = (id) => {
    axios.delete(`http://localhost:3000/product/addproducts/${id}`)
      .then(() => {
        alert("Product Deleted Successfully");
        setFlag(true)
      })
      .catch((err) => {
        console.log(err);
      })
  }

    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h1 className="text-xl font-bold flex items-center mb-4 md:mb-0">
                    <img src={Product} alt="Product Icon" className="px-2 w-12 h-8 mr-5" />
                    Product
                </h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg p-2 w-full md:w-1/2 mb-4 md:mb-0"
                />
                <button className="bg-purple-800 text-primary-foreground px-4 py-2 rounded-lg text-white">
                    <Link to="/product/addproduct">Add Product</Link>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-card border-0">
                    <thead className="bg-amber-200">
                        <tr className="bg-muted text-muted-foreground">
                            <th className="py-2 px-4 border-b">Id</th>
                            <th className="py-2 px-4 border-b">Product Name</th>
                            <th className="py-2 px-4 border-b">Sub Category</th>
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="hover:bg-muted/50 bg-gray-100">
                <td className="py-2 pl-14 border-b">{index + 110}</td>
                <td className="py-2 pl-20 border-b">{product.productname}</td>
                <td className="py-2 pl-20 border-b">
                  {product.subcategoryname}
                </td>
                <td className="py-2 pl-24 border-b" >
                  {product.categoryname}
                </td>
                <td className="py-2 pl-20 border-b" style={{ color: product.status === true ? 'green' : 'red' }}>
                    {product.status === true ? 'Active' : 'Inactive'}
                  </td>
                <td className="py-2 pl-20 border-b">
                  <button className="text-destructive px-2">
                    <Link to={`/product/editproduct/${product._id}`}>
                      <EditIcon className="text-gray-400" />
                    </Link>
                  </button>
                  <button className="text-destructive px-2" onClick={() =>  delProduct(product._id)}>
                    <DeleteIcon className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
                </table>
            </div>
        </div>
    )
}

export default Productdata