import React from 'react';
import './InventoryManagement.css';

const InventoryManagement = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          <i className="fas fa-box"></i>
          Inventory Management
        </h1>
        <div className="actions">
          <input placeholder="Search" type="text" />
          <button className="export">Export</button>
          <button className="add-item">+ Add Item</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Item Code.</th>
            <th>Photo</th>
            <th>Item Name</th>
            <th>Item Group</th>
            <th>Last Purchase</th>
            <th>On Hand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* data rows will be rendered here */}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;