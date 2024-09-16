import React, { useState } from "react";
import './AddProduct.css';
import axios, { Axios } from 'axios'; // Add Axios library
import { Modal } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const AddProduct = ({ onClose }) => {
    const [productName, setProductName] = useState('');
  const [productGroup, setProductGroup] = useState('');
  const [sellPrice, setSellPrice] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [onHand, setOnHand] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = async () => {
    try {
      const response = await Axios.post('http://localhost:9999/add-product', {
        productName,
        productGroup,
        sellPrice,
        purchasePrice,
        onHand,
        imageUrl
      });
      console.log(response.data);
      onClose(); // Close the modal after successful API call
    } catch (error) {
      console.error(error);
    }
  };

  return (
   <div className="add-product">
    <h2 className="title">Add Product</h2>
    <ClearIcon className="clearIcon" onClick={()=>onClose()}/>
      <form className="form-details">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Group"
          value={productGroup}
          onChange={(e) => setProductGroup(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sell Price"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Purchase Price"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="On Hand"
          value={onHand}
          onChange={(e) => setOnHand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add</button>
      </form>
      </div>
  );
};

export default AddProduct;