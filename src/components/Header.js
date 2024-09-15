import React from "react";
import './Header.css';
const Header = () => {
    return(
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
    )   
}
export default Header;