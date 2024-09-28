import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Products.css';
import Product from './Product';
import Sidebar from './Sidebar';
import InventoryManagement from './InventoryManagment';
import Dashboard from './Dashboard';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import PrivateRoute from './PrivateRoutes';
import { AuthProvider } from './AuthContext';
import CustomerOrder from './CustomerOrder';
import BillHistory from './BillHistory';


const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        {/* <Header /> */}
        <Outlet /> {/* Renders child routes here */}
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <AuthProvider>  {/* Wrap the entire app in AuthProvider */}
    <BrowserRouter>  {/* BrowserRouter wrapping the entire app */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Define the layout for the /app route and its children */}
        <Route path="/" element={
          <PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/products" element={<Product />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/billing"  element={<CustomerOrder />} />
          <Route path="/billingHistory"  element={<BillHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
};

export default Products;
