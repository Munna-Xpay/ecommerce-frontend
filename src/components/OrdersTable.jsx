import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { CancelOrder } from '../redux/orderSlice';



const OrdersTable = () => {
    const orders = useSelector(state => state.orderReducer.allOrders)
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const [itemsPerPage, SetItemsPerPage] = useState(5)
    const [cancelId, setCancelId] = useState("")
    const [cancelProductId, setCancelProductId] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    console.log(orders)

    const lastProductIndex = itemsPerPage * currentPage;
    const firstProductIndex = lastProductIndex - itemsPerPage;

    const handleCancelOrder = () => {
        if (cancelId && cancelProductId) {
            dispatch(CancelOrder({ data: { productId: cancelProductId }, id: cancelId }))
            setOpen(false);
        }
    }

    const handleClickOpen = (id, productId) => {
        setOpen(true);
        setCancelId(id)
        setCancelProductId(productId)
    };

    const handleClose = () => {
        setOpen(false);
        setCancelId("")
        setCancelProductId("")
    };

    const showAllOrders = orders?.slice(firstProductIndex, lastProductIndex)?.map((item, index) => {
        return (
            <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell >
                    {item?._id.slice(0, 10)}...
                </TableCell>
                <TableCell align="center">{item?.products?.product?.title}</TableCell>
                <TableCell align="center">{new Date(item.updatedAt).toDateString()}</TableCell>
                <TableCell align="center">{item?.products?.quantity}</TableCell>
                <TableCell align="center">{item?.products?.product?.discounted_price * item?.products?.quantity}</TableCell>
                <TableCell align="center">{item.orderStatus}</TableCell>
                <TableCell align="center"><Button size='small' variant='contained' disabled={item.orderStatus == "dispatched" || item.orderStatus == "delivered"} onClick={() => handleClickOpen(item?._id, item?.products?.product?._id)}>Cancel</Button></TableCell>
            </TableRow>
        )
    })

    return (
        <>
            {/* <Grid container spacing={1}>
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
            </Grid> */}

            <TableContainer component={Paper}>
                <Table sx={{ width: "100%" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Id</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Order Date</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showAllOrders}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                orders.length > 0 &&
                <Stack mt={2} direction={'row'} justifyContent={'center'}>
                    <Pagination count={Math.ceil(orders.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} color="primary" />
                </Stack>
            }

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box sx={{ padding: '20px' }}>
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure, Do you want want to cancel this order ?"}
                    </DialogTitle>
                    <DialogActions >
                        <Button variant='outlined' onClick={handleClose}>Back</Button>
                        <Button variant='contained' color='error' onClick={handleCancelOrder} autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

            <Toaster position="top-center"
                reverseOrder={false}
                containerStyle={{
                    padding: '10px',
                    fontSize: '17px',
                    fontFamily: 'sans-serif',
                }}
            />
        </>
    )
}

export default OrdersTable