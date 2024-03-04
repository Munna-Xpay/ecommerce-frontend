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
import { useSelector } from 'react-redux';



const OrdersTable = () => {
    const orders = useSelector(state => state.orderReducer.allOrders)
    console.log(orders)
    const columns = [
        { field: 'id', headerName: 'Order ID', width: 130 },
        { field: 'item', headerName: 'Item', width: 130 },
        { field: 'date', headerName: 'Ordered date', width: 130 },
        { field: 'quantity', headerName: 'Quantity',type: 'number', width: 60 },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 90,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            // valueGetter: (params) =>
            //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = orders.map((item, index) => {
        return { id: item._id, item: item?.products?.product?.title, date: new Date(item.createdAt).toDateString(), quantity: item?.products?.quantity, price: '$' + (item?.products?.product?.discounted_price * item?.products?.quantity), status: item.orderStatus }
    })

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