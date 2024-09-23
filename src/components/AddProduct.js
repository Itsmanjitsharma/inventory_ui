import React, { useState } from "react";
import './AddProduct.css';
import ClearIcon from '@mui/icons-material/Clear';

const AddProduct = ({ onClose }) => {
  const [name, setName] = useState('');
  const [pgroup, setPgroup] = useState('');
  const [sellPrice, setSellPrice] = useState(0);
  const [purchagePrice, setPurchagePrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    alert("handleAddProduct");
    
    const jsonRequest = [{
        name,
        pgroup,
        sellPrice,
        purchagePrice,
        quantity,
        imageUrl
    }];

    try {
        const response = await fetch('http://localhost:1001/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Add this line to specify JSON format
            },
            body: JSON.stringify(jsonRequest)  // Convert JS object to JSON string
        });

        alert(response.ok);
        if (response.ok) {
            alert('Product saved successfully!');
        } else {
            alert('Failed to save Product');
        }
        setName('');
        setPgroup('');
        setPurchagePrice('');
        setSellPrice('');
        setQuantity('');
        setImageUrl('');
    } catch (error) {
        console.error('Error saving product:', error);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Group"
          value={pgroup}
          onChange={(e) => setPgroup(e.target.value)}
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
          value={purchagePrice}
          onChange={(e) => setPurchagePrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="On Hand"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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