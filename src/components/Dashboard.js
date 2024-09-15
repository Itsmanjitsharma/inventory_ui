import React from 'react';
import './Dashboard.css';
import SellIcon from '@mui/icons-material/Sell';
import PreviewIcon from '@mui/icons-material/Preview';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MoneyIcon from '@mui/icons-material/Money';
import { LineChart } from '@mui/x-charts';

const Dashboard = () => {
    return (
        <div className="dashboardcontainer">
            <div className="cards">
                <div className="card">
                    <h3>Sales Overview <i className="fas fa-ellipsis-h more"></i></h3>
                    <div className="content">
                        <div className='iconcontent'>
                            <SellIcon className='dashboardicons' />
                            <div className='subcontainer'>
                                <div className="label">Total Sales</div>
                                <span className="value">786</span>
                            </div>
                        </div>
                        <div>
                            <div className='iconcontent'>
                                <PreviewIcon className='dashboardicons' />
                                <div className='subcontainer'>
                                    <div className="label">Revenu</div>
                                    <span className="value">17584</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <div className='iconcontent'>
                                <CurrencyRupeeIcon className='dashboardicons' />
                                <div className='subcontainer'>
                                    <div className="label">Cost</div>
                                    <span className="value">12487</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='iconcontent'>
                                <MoneyIcon className='dashboardicons' />
                                <div className='subcontainer'>
                                    <div className="label">Profit</div>
                                    <span className="value">5097</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h3>Purchase Overview <i className="fas fa-ellipsis-h more"></i></h3>
                    <div className="content">
                        <div>
                            <div className="label">No of Purchase</div>
                            <span className="value">45</span>
                        </div>
                        <div>
                            <div className="label">Cost</div>
                            <span className="value">786</span>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <div className="label">Cancel Order</div>
                            <span className="value">04</span>
                        </div>
                        <div>
                            <div className="label">Returns</div>
                            <span className="value">07</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h3>Products Details</h3>
                    <div className="productcontent">
                        <div className="productsList">
                            <span>Low Stock Items</span>
                            <p>02</p>
                        </div>
                        <div className="productsList">
                            <span>Items Group</span>
                            <p>14</p>
                        </div>
                        <div className="productsList">
                            <span>No of Items</span>
                            <p>104</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart">
                <h3>Sale and Purchase overview</h3>
                <LineChart
                    series={[
                        { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                    ]}

                />
            </div>
        </div>
    );
};

export default Dashboard;