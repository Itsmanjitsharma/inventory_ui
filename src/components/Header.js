import React, { useState } from "react";
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    //const [username,setUsername] = useState('');
    return(
        <div className="header">
                    <input type="text" placeholder="Search menu, orders and more" />
                    <div className="user-info">
                        <img
                            alt="User profile picture"
                            src="https://wallpaperaccess.com/full/7126297.jpg"
                        />
                        <span>{sessionStorage.getItem('username')}</span>
                        <div className="chart-icon">
                         <ShoppingCartIcon/>
                        </div>
                    </div>
                    
                </div>
    )   
}
export default Header;