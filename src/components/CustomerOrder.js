import React, { useEffect, useState } from "react";
import './CustomerOrder.css';
import axios from "axios";

const CustomerOrder = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

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

  const handleAddItem = (item) => {
    const existingItem = selectedItems.find((i) => i.id === item.id);
    if (existingItem) {
      // If the item already exists, increase its quantity
      const updatedItems = selectedItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setSelectedItems(updatedItems);
      setFilteredItems(updatedItems);
    } else {
      // Add new item with quantity 1
      const newSelectedItems = [...selectedItems, { ...item, quantity: 1 }];
      setSelectedItems(newSelectedItems);
      setFilteredItems(newSelectedItems);
    }
  };

  const handleSearch = (e) => {
    const selectedItemId = parseInt(e.target.value, 10);
    const selectedItem = items.find((item) => item.id === selectedItemId);
    if (selectedItem) {
      handleAddItem(selectedItem);
    }
  };

  const handleIncrementQuantity = (id) => {
    const updatedItems = selectedItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setSelectedItems(updatedItems);
    setFilteredItems(updatedItems);
  };
  function saveBill() {
    const totalAmount = parseFloat(
        selectedItems.reduce((acc, item) => acc + parseFloat(item.sellPrice) * item.quantity, 0.0).toFixed(2)
    );
    const billRequest = { 
        products: selectedItems  // Assuming selectedItems contains the products
    };
    axios.post(`http://localhost:1001/api/bills?totalAmount=${totalAmount}`, billRequest)
        .then(response => {
            console.log('Bill saved successfully:', response.data);
            setSelectedItems([]);
            setFilteredItems([]);
        })
        .catch(error => {
            console.error('Error saving bill:', error);
        });
}

  

  const handleDecrementQuantity = (id) => {
    const updatedItems = selectedItems
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setSelectedItems(updatedItems);
    setFilteredItems(updatedItems);
  };

  return (
    <>
      <div className="search-container">
        <select className="search-input" onChange={(e) => handleSearch(e)}>
          <option value="">Select an item</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container">
        <div className="order-section">
          <div className="order-items">
            {filteredItems.map((fitem) => (
              <div className="order-item" key={fitem.id}>
                <span>{fitem.id}</span>
                <div className="productImagess">
                  <img
                    src={fitem.imageUrl}
                    alt={fitem.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <span>{fitem.name}</span>
                <span>{fitem.sellPrice}</span>
                <div className="quantities">
                  <button
                    className="add-btn"
                    onClick={() => handleIncrementQuantity(fitem.id)}
                  >
                    +
                  </button>
                  <span className="quantity">{fitem.quantity}</span>
                  <button
                    className="add-btn"
                    onClick={() => handleDecrementQuantity(fitem.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bill-summery">
            <h3>Bill Summary</h3>
            <div className="summery">
              <div className="summeryrows">
                <div>Items</div>
                <div>{selectedItems.length}</div>
              </div>
              <div className="summeryrows">
                <div>Total</div>
                <div>
                  {selectedItems.reduce(
                    (acc, item) => acc + item.sellPrice * item.quantity,
                    0
                  )}
                </div>
              </div>
              <div className="summeryrows">
                <div>GST (18%)</div>
                <div>
                  {(
                    selectedItems.reduce(
                      (acc, item) => acc + item.sellPrice * item.quantity,
                      0
                    ) * 0.18
                  ).toFixed(2)}
                </div>
              </div>
              <div className="summeryrows">
                <div>Grand Total</div>
                <div>
                  {(
                    selectedItems.reduce(
                      (acc, item) => acc + item.sellPrice * item.quantity,
                      0
                    ) * 1.18
                  ).toFixed(2)}
                </div>
              </div>    
            </div>
            <button className="clear-btn" onClick={saveBill}>Clear Bill</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerOrder;
