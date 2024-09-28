import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import './BillHistory.css';

function Row({ bill }) {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {bill.billId}
                </TableCell>
                <TableCell align="right">{bill.totalAmount}</TableCell>
                <TableCell align="right">{bill.billDate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Products
                            </Typography>
                            <Table size="small" aria-label="products">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bill.products.map((product) => (
                                        <TableRow key={product.productid}>
                                            <TableCell>{product.productid}</TableCell>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell align="right">{product.quantity}</TableCell>
                                            <TableCell align="right">{product.sellPrice}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const BillHistory = () => {
    const [billHistories, setBillHistories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1001/api/bills')
            .then((res) => {
                setBillHistories(res.data);
            })
            .catch((error) => {
                console.error('Error fetching bill histories:', error);
            });
    }, []);

    return (
        <div className='billhistory-container'>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Bill ID</TableCell>
                        <TableCell align="right">Total Amount</TableCell>
                        <TableCell align="right">Bill Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {billHistories.map((bill) => (
                        <Row key={bill.billId} bill={bill} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default BillHistory;
