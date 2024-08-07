
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Categorys from './components/Categorys';
import Subcategorys from './components/Subcategorys';
import Product from './components/Product';
import Addcategory from './firstpage/Addcategory';
import Editcategory from './firstpage/Editcategory';
import Subaddcategory from './secondpage/Subaddcategory';
import Subedit from './secondpage/Subedit';
import Forgotpass from './components/Forgotpass';
import Productadd from './thirdpage/Productadd';
import Productedit from './thirdpage/Productedit';




function App() {
  return (
    <div>  

    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/categorys" element={<Categorys />}/>
          <Route path='/categorys/addcategorys' element={<Addcategory />}/>
          <Route path='/categorys/editcategory/:id' element={<Editcategory/>}/>
          <Route path='/subcategorys' element={<Subcategorys />}/>
          <Route path='/subcategorys/subaddcategory' element={<Subaddcategory/>}/>
          <Route path='/subcategorys/subedit/:id' element={<Subedit/>}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/product/addproduct' element={<Productadd/>}/>
          <Route path='/product/editproduct/:id' element={<Productedit/>}/>
          <Route path='/forgotpassword' element={<Forgotpass />}/>
          

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
