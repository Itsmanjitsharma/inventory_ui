import React, { useEffect, useState } from 'react';
import './InventoryManagment.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mui/material';
import AddProduct from './AddProduct';
import DataTable from './DataTable';
import { v4 as uuidv4 } from 'uuid';


const InventoryManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1001/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1001/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const itemsWithId = data.map((item) => ({ ...item, id: item.productid }));
        setItems(itemsWithId);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);
  const handleAddProduct = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="table-container">
        <div className="table-header">
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <div className="filters">
              Filters
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="buttons">
            <button className="export">
              Export
              <i className="fas fa-chevron-down" />
            </button>
            <button className="new-product" onClick={handleAddProduct}>
              New product
            </button>
          </div>
        </div>
        <div className="table-body">
        <DataTable rows={items}/>
        </div>
        <Modal open={isOpen}>
        <AddProduct handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
};

export default InventoryManagement;
