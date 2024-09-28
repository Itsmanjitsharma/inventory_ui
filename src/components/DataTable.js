import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const DataTable = (props) => {
  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 70,
    },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 110,
      renderCell: (params) => (
        <img
          src={params.row.imageUrl}
          style={{ height: 40, width: 40, borderRadius: '50%' ,alignSelf:'center', margin:'auto',paddingTop:'6px'}}
          alt="Product"
        />
      ),
    },
    { 
      field: 'name', 
      headerName: 'Product name', 
      width: 200,
    },
    {
      field: 'purchagePrice',
      headerName: 'Purchase Price',
      type: 'number',
      width: 120,
    },
    {
      field: 'sellPrice',
      headerName: 'Sell Price',
      type: 'number',
      width: 120,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell: () => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' ,marginTop:'10px'}}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <EditIcon />
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <CheckIcon />
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <DeleteIcon />
            </button>
          </div>
        );
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center',
          },
          '& .MuiDataGrid-row': {
            textAlign: 'center',
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
