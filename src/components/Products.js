import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Products.css';
import Product from './Product';
import Sidebar from './Sidebar';
import InventoryManagement from './InventoryManagment';
import Dashboard from './Dashboard';
import Header from './Header';

const Products = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/Products" element={<Product />} />
            <Route path="/Inventory" element={<InventoryManagement />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Products;