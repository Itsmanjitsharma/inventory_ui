import React from 'react';
import './Sidebar.css';

import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
const Sidebar = () =>{
    return (
        <div className="sidebar">
        <h1>Grocery Station</h1>
        <ul>
            <li>
                <DashboardIcon className='icons' />
                <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
                <InventoryIcon className='icons' />
                <NavLink to="/Inventory">Inventory</NavLink>
            </li>
            <li>
                <ReceiptIcon className='icons' />
                <NavLink to="/Billing">Billing</NavLink>
            </li>
            <li>
                <ReceiptIcon className='icons' />
                <NavLink to="/BillingHistory">Bill History</NavLink>
            </li>
            <li>
                <ManageAccountsIcon className='icons' />
                <NavLink to="/Dashboard">Statstic</NavLink>
            </li>
            <li>
                <PeopleIcon className='icons' />
                <NavLink to="/signup">Log Out</NavLink>
            </li>
        </ul>
    </div>
    )
}
export default Sidebar;