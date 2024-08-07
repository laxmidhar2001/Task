import { Link, useNavigate, useParams } from "react-router-dom"
import Drawer from "../components/Drawer"
import Navbars from "../components/Navbars"
import { FaArrowLeft } from "react-icons/fa"
import { Menu } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"


function Subedit() {

  let [categoryName, setCategoryName] = useState("")
    let [subCategoryName, setSubCategoryName] = useState("")
    let [qty, setQty] = useState("")
    let [status, setStatus] = useState("")

    let obj = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/subcategorys/updatesubcategory/${obj.id}`)
        .then((response) => {
            setCategoryName(response.data.categoryname)
            setSubCategoryName(response.data.subcategoryname)
            setQty(response.data.number)
            setStatus(response.data.status)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [obj.id])

    const updateSubCat = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/subcategorys/addsubcategories/${obj.id}`, {
            categoryname: categoryName,
            subcategoryname: subCategoryName,
            number: qty,
            status: status
        })
        .then((response) => {
            console.log(response);
            alert("Sub Category Updated Successfully");
            navigate('/subcategorys')
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div>
      <Navbars />
            <div className="flex justify-between">
                <Drawer/>
                <div className="p-6 bg-background rounded-lg shadow-md w-4/5 ">

                    <h1 className="text-xl font-bold flex items-center mb-4 md:mb-0">
                        <Link to="/subcategorys">
                            <FaArrowLeft />
                        </Link>
                        <img src={Menu} alt="Menu Icon" className="px-2 w-12 h-8 mr-5" />
                        Sub Category
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-foreground">
                                Category
                            </label>
                            <select id="category" className="mt-1 block w-full border border-border rounded-md p-2"value={categoryName} onChange={e => setCategoryName(e.target.value)}>
                                <option value={""}>Select category name</option>
                                <option value={"Ghee & Oil"}>Ghee & Oil</option>
                                <option value={"Tea"}>Tea</option>
                                <option value={"Dal & Pilses"}>Dal & Pilses</option>
                                <option value={"Atta & Flours"}>Atta & Flours</option>
                                <option value={"Rice & Rice Products"}>Rice & Rice Products</option>
                                <option value={"Salt, Sugar & Sugar Products"}>Salt, Sugar & Sugar Products</option>
                                <option value={"Spices & Masalas"}>Spices & Masalas</option>
                                <option value={"Dry Fruits & Nuts"}>Dry Fruits & Nuts</option>
                                <option value={"Edible Oils & Ghee"}>Edible Oils & Ghee</option>
                                <option value={"Sweets & Chocolates"}>Sweets & Chocolates</option>
                                <option value={"Bakery, Cakes & Dairy"}>Bakery, Cakes & Dairy</option>
                                <option value={"Beverages"}>Beverages</option>
                                <option value={"Snacks & Branded Foods"}>Snacks & Branded Foods</option>
                                <option value={"Foodgrains, Oil & Masala"}>Foodgrains, Oil & Masala</option>
                                <option value={"Others"}>Others</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sub-category-name" className="block text-sm font-medium text-foreground">
                                Sub category name
                            </label>
                            <input type="text" id="sub-category-name" placeholder="Enter Sub Category Name" className="mt-1 block w-full border border-border rounded-md p-2" value={subCategoryName} onChange={e => setSubCategoryName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="sub-category-sequence" className="block text-sm font-medium text-foreground">
                                Sub Category Sequence
                            </label>
                            <input type="number" id="sub-category-sequence" className="mt-1 block w-full border border-border rounded-md p-2" value={qty} onChange={e => setQty(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-4 flex gap-4">
                        <label className="block text-muted-foreground mb-1">Status
                            <select id="status" className="border border-border rounded-md p-2 w-full" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </label>
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
                        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-4 py-2 mr-2 w-28 border border-border" onClick={() => {navigate("/subcategories")}}>Cancel</button>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-4 py-2  bg-purple-800 w-28 text-white" onClick={updateSubCat}>Save</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Subedit