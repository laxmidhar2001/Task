import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import Menu from '../assets/menu.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Subdata() {

  let [subCategories, setSubCategories] = useState([])
  let [flag, setFlag] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/subcategorys/addsubcategories')
      .then((res) => {
        setSubCategories(res.data)
        setFlag(false)
      })
      .catch((err) => {
        console.log(err);
      })
  },[flag])

  const delSubCategory = (id) => {
    axios.delete(`http://localhost:3000/subcategorys/addsubcategories/${id}`)
      .then(() => {
        alert("Sub Category Deleted Successfully");
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
          <img src={Menu} alt="Menu Icon" className="px-2 w-12 h-8 mr-5" />
          Sub Category
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg p-2 w-full md:w-1/2 mb-4 md:mb-0"
        />
        <button className="bg-purple-800 text-primary-foreground px-4 py-2 rounded-lg text-white">
          <Link to="/subcategorys/subaddcategory">Add Subcategory</Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card border-0">
          <thead className="bg-amber-200">
            <tr className="bg-muted text-muted-foreground">
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">SubCategory Name</th>
              <th className="py-2 px-4 border-b">Category Name</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Sequence</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.map((category, index) => (
              <tr key={category._id} className="hover:bg-muted/50 bg-gray-100">
                <td className="py-2 pl-10 border-b">{index + 110}</td>
                <td className="py-2 pl-16 border-b">{category.subcategoryname}</td>
                <td className="py-2 pl-28 border-b">{category.categoryname}</td>
                <td className="py-2 pl-10 border-b">
                  <img alt={category.categoryname} src={category.imageUrl} className="w-10 h-10" />
                </td>
                <td className="py-2 pl-10 border-b" style={{ color: category.status === true ? 'green' : 'red' }}>
                  {category.status ? 'Active' : 'Inactive'}
                </td>
                <td className="py-2 pl-10 border-b">{category.number}</td>
                <td className="py-2 pl-7 border-b">
                  <button className="text-destructive px-2">
                    <Link to={`/subcategorys/subedit/${category._id}`}>
                      <EditIcon className="text-gray-400" />
                    </Link>
                  </button>
                  <button className="text-destructive px-2" onClick={() => delSubCategory(category._id)}>
                    <DeleteIcon className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subdata;
