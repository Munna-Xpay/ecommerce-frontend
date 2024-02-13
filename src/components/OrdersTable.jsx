import { Grid, InputAdornment, TextField } from '@mui/material'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataGrid } from '@mui/x-data-grid';



const OrdersTable = () => {

    const columns = [
        { field: 'id', headerName: 'Order ID', width: 130 },
        { field: 'item', headerName: 'Item', width: 130 },
        { field: 'date', headerName: 'Delivery date', width: 130 },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            // valueGetter: (params) =>
            //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, item: 'Apple iPhone', date: '04 Feb 2024', price: '$' + 53.37, status: 'Completed' },
        { id: 2, item: 'Bose QuietComfort', date: '04 Feb 2024', price: '$' + 53.37, status: 'pending' },
        { id: 3, item: 'Canon EOS', date: '04 Feb 2024', price: '$' + 53.37, status: 'return' },
        { id: 4, item: 'HP Spectre', date: '04 Feb 2024', price: '$' + 53.37, status: 'Canceled' },
        { id: 5, item: 'Samsung Galaxy', date: '04 Feb 2024', price: '$' + 53.37, status: 'pending' },
        { id: 6, item: 'Nike Air Max', date: '04 Feb 2024', price: '$' + 53.37, status: 'pending' },
        { id: 7, item: 'Adidas Ultraboost', date: '04 Feb 2024', price: '$' + 53.37, status: 'pending' },
        { id: 8, item: 'Sony PlayStation', date: '04 Feb 2024', price: '$' + 53.37, status: 'pending' },
        { id: 9, item: 'Microsoft Surface', date: '04 Feb 2024', price: '$' + 53.37, status: 'pending' },
    ];

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={7}>
                    <TextField
                        sx={{ width: '100%' }}
                        placeholder='Search...'
                        type='text'
                        variant='outlined'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{ width: '100%' }} label='Start Date' onChange={(e) => console.log(e)} />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{ width: '100%' }} label='End Date' onChange={(e) => console.log(e)} />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default OrdersTable