import React, { useEffect, useState } from 'react';
import './Product.css';
const Product = () => {
    /*const dishes = [
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
    ];*/


    const [dishes,setDishes] = useState([]);

    useEffect(() => {
        // Fetch data from the API with Authorization token
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token'); // or retrieve from context, state, etc.
            
            const response = await fetch('http://localhost:1001/api/products', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}` // Add the Authorization header with the token
              },
            });
            console.log(response);
            if (!response.ok) {
              throw new Error('Failed to fetch dishes');
            }
            
            const data = await response.json();

            setDishes(data);
            console.log(data)
            //setDishes(data); // Set the fetched data to dishes state
            
          } catch (error) {
            console.error('Error fetching dishes:', error);
           // setDishes([]); // Handle error by setting dishes to an empty array
          }
        };
      
        fetchData();
      }, []); // Empty dependency array ensures this runs once when component mounts
      
    return (
        <div className="product">
        <div className="dishes-list">
                    {dishes.map((dish) => (
                       <div className="dish-card" key={dish.id}>
                            <img alt={dish.name} src={dish.imageUrl} />
                            <div className='bottom'>
                            <h3>{dish.name}</h3>
                            {dish.pgroup && <p>{dish.pgroup}</p>}
                            </div>
                            <div className='bottom'>
                            {dish.sellPrice && <p className="price">{dish.sellPrice}</p>}
                            {dish.quantity && <p className="itemleft">{dish.quantity}</p>}
                            </div>
                        </div>
   ))}
</div>
        </div>
    )
}
export default Product;