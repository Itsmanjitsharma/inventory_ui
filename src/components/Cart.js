import React, { useState } from "react";
import './Cart.css';

const Cart = () => {
    // Define the initial state for item quantities
    const [quantities, setQuantities] = useState({
        strawberry: 1,
        cauliflower: 1,
        rice: 1,
        orange: 1,
        juliusGold: 1,
        bubblr: 1,
    });

    // Function to increment the quantity of a specific item
    const incrementQuantity = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    // Function to decrement the quantity of a specific item
    const decrementQuantity = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Bucket List</h1>
                <button>
                    <i className="fas fa-qrcode"></i>
                    Scan QR
                </button>
            </div>
            
            {/* Strawberry item */}
            <div className="item">
                <img alt="Image of strawberries" height="50" src="strawberry-image-url" width="50" />
                <div className="item-details">
                    <h2>Strawberry</h2>
                    <p>Fruit</p>
                    <div className="price">$20</div>
                </div>
                <div className="quantity-controls">
                    <button onClick={() => decrementQuantity('strawberry')}>-</button>
                    <span>{quantities.strawberry}</span>
                    <button onClick={() => incrementQuantity('strawberry')}>+</button>
                </div>
                <button>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

            {/* Cauliflower item */}
            <div className="item">
                <img alt="Image of cauliflower" height="50" src="cauliflower-image-url" width="50" />
                <div className="item-details">
                    <h2>Cauliflower</h2>
                    <p>Vegetable</p>
                    <div className="price">$10</div>
                </div>
                <div className="quantity-controls">
                    <button onClick={() => decrementQuantity('cauliflower')}>-</button>
                    <span>{quantities.cauliflower}</span>
                    <button onClick={() => incrementQuantity('cauliflower')}>+</button>
                </div>
                <button>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

            {/* Repeat similar structure for rice, orange, julius-gold, and bubblr items */}
            {/* Use quantities.rice, quantities.orange, quantities.juliusGold, quantities.bubblr */}

            <div className="add-more">
                <a href="#">Add More Items</a>
            </div>
        </div>
    );
};

export default Cart;
