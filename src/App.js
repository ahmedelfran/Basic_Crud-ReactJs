
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './comp/navbar';
import Sidebar from './comp/sidebar';
import AddProduct from './pages/addProduct';
import Home from './pages/Home';
import Productdetails from './pages/productdetails';
import Products from './pages/products';
import Update from './pages/update';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className='row'>
          <div className='col-2 sidebar'>
            <Sidebar />
          </div>
          <div className='col-10 boody p-5'>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/products" element={<Products />} />;
            <Route path="/addproduct" element={<AddProduct />} />;
            <Route path="/products/:productId" element={<Productdetails />} />;
            <Route path="/update/:id" element={<Update />} />;
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
