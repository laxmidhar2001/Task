import { Link } from "react-router-dom"
import Drawer from "../components/Drawer"
import Navbars from "../components/Navbars"
import { FaArrowLeft } from "react-icons/fa"
import Product from '../assets/product.svg'
import { useState } from "react"
import axios from "axios"


const Productadd = () => {
    let [categoryName, setCategoryName] = useState('')
    let [subCategoryName, setSubCategoryName] = useState('')
    let [productName, setProductName] = useState('')

    const submitProduct = async (e) => {
        e.preventDefault();
        const productData = {
            categoryname: categoryName,
            subcategoryname: subCategoryName,
            productname: productName
        }

        if (categoryName === '' || subCategoryName === '' || productName === '') {
            alert('Please fill in all fields')
        } else {
            try {
                await axios.post('http://localhost:3000/product/addproducts',
                    productData
                )
                console.log('Data sent')
                alert('Data saved')
                setCategoryName('')
                setSubCategoryName('')
                setProductName('')
            }
            catch (error) {
                console.error('Failed to send data:', error)
                alert(`Error: ${error.message}`)
            }
        }
    }

    const cancelProduct = () => {
        setCategoryName('')
        setSubCategoryName('')
        setProductName('')
    }
    return (
        <div>
        <Navbars />
        <div className="flex justify-between">
            <Drawer />
            <div className="p-6 bg-background rounded-lg shadow-md w-4/5 ">

                <h1 className="text-xl font-bold flex items-center mb-4 md:mb-0">
                    <Link to="/product">
                        <FaArrowLeft />
                    </Link>
                    <img src={Product} alt="Menu Icon" className="px-2 w-12 h-8 mr-5" />
                    Product
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-foreground">
                            Category
                        </label>
                        <select id="category" className="mt-1 block w-full border border-border rounded-md p-2" value={categoryName} onChange={e => setCategoryName(e.target.value)}>
                            <option value={""}>Select category name</option>
                            <option value={"Ghee & Oil"}>Ghee & Oil</option>
                            <option value={"Tea"}>Tea</option>
                            <option value={"Dal & Pilses"}>Dal & Pilses</option>
                            <option value={"Atta & Flours"}>Atta & Flours</option>
                            <option value={"Rice"}>Rice</option>
                            <option value={"Pulses"}>Pulses</option>
                            <option value={"Other"}>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sub-category-name" className="block text-sm font-medium text-foreground">
                            Sub category name
                        </label>
                        <input type="text" id="sub-category-name" placeholder="Enter Sub Category Name" className="mt-1 block w-full border border-border rounded-md p-2" value={subCategoryName} onChange={e => setSubCategoryName(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="sub-category-sequence" className="block text-sm font-medium text-foreground">
                            Product Name
                        </label>
                        <input type="text" id="sub-category-sequence" className="mt-1 block w-full border border-border rounded-md p-2" value={productName} onChange={e => setProductName(e.target.value)}/>
                    </div>
                </div>
                <div className="flex space-x-4 justify-end m-24">
                    <div className="border rounded-lg p-4 bg-card">
                        <img hidden alt="Uploaded image preview" src="https://placehold.co/100x100" className="rounded-md mb-2" />
                        <span className="text-muted-foreground">Upload Image</span>
                    </div>
                    <div className="border rounded-lg p-4 bg-card flex flex-col border-dashed">
                        <input type="file" />
                        <span className="text-muted-foreground">
                            Upload Maximum allowed
                            <br />
                            file size is 10MB
                        </span>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-4 py-2 mr-2 w-28 border border-border " onClick={cancelProduct}>Cancel</button>
                    <button className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-4 py-2  bg-purple-800 w-28 text-white" onClick={submitProduct}>Save</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Productadd