import React from 'react';
import './Products.css';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';

const Products = () => {
    const dishes = [
        {
          id: 1,
          image: "https://tse2.mm.bing.net/th?id=OIP.62lh_jf8pV1ChKKRvc6KMAHaD5&pid=Api&P=0&h=180",
          name: "moong daal",
          description: "Letins",
          price: "₹ 120.00",
          item: 7
        },
        {
          id: 2,
          image: "https://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal.jpg",
          name: "toor daal",
          description: "Letins",
          price: "₹ 180.00",
          item: 4
        },
        {
          id: 3,
          image: "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
          name: "Onion",
          description: "Vegitable",
          price: "₹ 180.00",
          item: 10
        },
        {
          id: 4,
          image: "https://www.thespruce.com/thmb/TMRYcJe21L7W5Rn2R8jDqIfVSCk=/5750x3829/filters:fill(auto,1)/top-tomato-growing-tips-1402587-11-c6d6161716fd448fbca41715bbffb1d9.jpg",
          name: "Tomatos",
          description: "Vegitable",
          price: "₹ 180.00",
          item: 5
        },
        {
          id: 5,
          image: "https://www.netmeds.com/images/cms/wysiwyg/blog/2023/05/1683696515_Brinjal-_898x450.jpg",
          name: "Brinjal",
          description: "Vegitable",
          price: "₹ 180.00",
          item: 19
        },
        {
          id: 6,
          image: "http://upload.wikimedia.org/wikipedia/commons/7/74/Big_red_apple.jpg",
          name: "Apple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 17
        },
        {
          id: 7,
          image: "https://tse3.mm.bing.net/th?id=OIP.q3JCo-zLI3ugZQhgNyFoFwHaIt&pid=Api&P=0&h=180",
          name: "Green Apple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 20
        },
        {
          id: 8,
          image: "http://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg",
          name: "Banana",
          description: "Fruits",
          price: "₹ 180.00",
          item: 11
        },
        {
          id: 9,
          image: "https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg",
          name: "Green Banana",
          description: "Fruits",
          price: "₹ 180.00",
          item: 34
        },
        {
          id: 10,
          image: "https://minnetonkaorchards.com/wp-content/uploads/2022/06/shutterstock_2107989617-2048x1152.jpg",
          name: "Red Banana",
          description: "Fruits",
          price: "₹ 180.00",
          item: 10
        },
        {
          id: 11,
          image: "https://tse3.mm.bing.net/th?id=OIP.N026IWTyLgA0oDKJkKb9zQHaLH&pid=Api&P=0&h=180",
          name: "Pineapple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 7
        },
        {
          id: 12,
          image: "https://tse3.mm.bing.net/th?id=OIP.N026IWTyLgA0oDKJkKb9zQHaLH&pid=Api&P=0&h=180",
          name: "Pineapple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 22
        },
        {
          id: 13,
          image: "https://tse3.mm.bing.net/th?id=OIP.N026IWTyLgA0oDKJkKb9zQHaLH&pid=Api&P=0&h=180",
          name: "Pineapple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 16
        },
        {
          id: 14,
          image: "https://tse3.mm.bing.net/th?id=OIP.N026IWTyLgA0oDKJkKb9zQHaLH&pid=Api&P=0&h=180",
          name: "Pineapple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 81
        },
        {
          id: 15,
          image: "https://tse3.mm.bing.net/th?id=OIP.N026IWTyLgA0oDKJkKb9zQHaLH&pid=Api&P=0&h=180",
          name: "Pineapple",
          description: "Fruits",
          price: "₹ 180.00",
          item: 12
        }
      ];
    return (
        <div className="container">
            <div className="sidebar">
                <h1>Grocery Station</h1>
                <ul>
                    <li>
                       <InventoryIcon className='icons'/>
                        <a href="#">Inventory</a>
                    </li>
                    <li>
                        <DashboardIcon className='icons'/>
                        <a href="#">Order Line</a>
                    </li>
                    <li>
                        <ManageAccountsIcon className='icons'/>
                        <a href="#">Manage Accounts</a>
                    </li>
                    <li>
                       <PeopleIcon className='icons'/>
                        <a href="#">Customers</a>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <div className="header">
                    <input type="text" placeholder="Search menu, orders and more" />
                    <div className="user-info">
                        <img
                            alt="User profile picture"
                            src="https://wallpaperaccess.com/full/7126297.jpg"
                        />
                        <span>Manjit Sharma</span>
                    </div>
                </div>

                <div className="dishes-list">
                    {dishes.map((dish) => (
                       <div className="dish-card" key={dish.id}>
                            <img alt={dish.name} src={dish.image} />
                            <div className='bottom'>
                            <h3>{dish.name}</h3>
                            {dish.description && <p>{dish.description}</p>}
                            </div>
                            <div className='bottom'>
                            {dish.price && <p className="price">{dish.price}</p>}
                            {dish.item && <p className="itemleft">{dish.item}</p>}
                            </div>
                        </div>
						
   ))}
                </div>
            </div>
        </div>
    );
};

export default Products;