import { Box, Divider, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTabPanel from '../components/CustomTabPanel';
import OrdersTable from '../components/OrdersTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../redux/orderSlice';

const AccountOrders = () => {

    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [])

    return (
        <>
            <Stack spacing={3}>
                <Stack spacing={2}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }}>Vouchers</Typography>

                </Stack>
                <Divider />

                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="All Orders" {...a11yProps(0)} />
                            <Tab label="Completes" {...a11yProps(1)} />
                            <Tab label="Pending" {...a11yProps(2)} />
                            <Tab label="Return & Refund" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <OrdersTable />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <OrdersTable />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <OrdersTable />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <OrdersTable />
                    </CustomTabPanel>
                </Box>

            </Stack >
        </>
    )
}

export default AccountOrders