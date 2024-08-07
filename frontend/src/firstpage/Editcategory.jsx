import Navbars from '../components/Navbars'
import Drawer from '../components/Drawer'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Editcategory() {

  let [name, setName] = useState("")
  let [qty, setQty] = useState("")
  let [status, setStatus] = useState("")

  let navigate = useNavigate()

  let obj = useParams()
  // console.log(obj);

  useEffect(() => {
    axios.get(`http://localhost:3000/categorys/updatecategory/${obj.id}`)
    .then((response) => {
      setName(response.data.categoryname)
      setQty(response.data.number)
      setStatus(response.data.status)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [obj.id])
  

  const updateCategory = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/categorys/addcategorys/${obj.id}`, {
      categoryname: name,
      number: qty,
      status: status
    })
    .then((response) => {
      console.log(response);
      alert("Category Updated Successfully");
      navigate('/categorys')
    })
    .catch((error) => {
      console.log(error);
    })
  }
  

  return (
    <div>
      <Navbars />
      <div className='flex justify-between'>
        <Drawer />
        <div className="p-6 bg-background rounded-lg shadow-md w-4/5">
          <h2 className="text-lg font-semibold mb-4">
            <button className='mr-4'>  <Link to="/categorys"><FaArrowLeft /></Link></button>Edit Category</h2>
          <form >
            <div className='flex gap-20'>
              <div className="mb-4">

                <input type="text" className="mt-1 block w-full border border-border rounded-md p-2 focus:ring focus:ring-ring placeholder:text-black focus:outline-none" placeholder="Category Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
              </div>
              <div className="mb-4">

                <input type="number" placeholder='Category Sequence' className="block text-sm font-medium text-muted-foreground border-2 placeholder:text-black rounded-md h-12 text-center focus:ring focus:ring-ring focus:outline-none" value={qty} onChange={(e) => {setQty(e.target.value)}}/>

              </div>
              <div className="mb-4 flex gap-4">
                <label className="block text-muted-foreground mb-1">Status
                  <select id="status" className="border border-border rounded-md p-2 w-full" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="border rounded-lg p-4 bg-card">
                <img alt="Uploaded image preview" src="https://placehold.co/100x100" className="rounded-md mb-2" />
                <span className="text-muted-foreground">Upload Image</span>
              </div>
              <div className="border rounded-lg p-4 bg-card flex flex-col border-dashed">
                {/* <img undefinedhidden="true" alt="Upload icon" src="https://openui.fly.dev/openui/50x50.svg?text=📸" className="mb-2 " /> */}
                <input type="file" />
                <span className="text-muted-foreground">Upload Maximum allowed<br />file size is 10MB</span>
              </div>
            </div>
            <div className="flex justify-end  mt-12 gap-8">
              <button type="button" className="bg-muted text-muted-foreground hover:bg-muted/80 p-2 w-28 border border-border rounded-full ">
                Cancel
              </button>
              <button onClick={updateCategory} type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-full  bg-purple-800 w-28 text-white">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editcategory