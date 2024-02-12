import { Box, Button, Divider, Paper, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomTabPanel from '../components/CustomTabPanel';

const AccountVouchers = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <Stack spacing={3}>
                <Stack spacing={2}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }}>Vouchers</Typography>
                    <Paper>
                        <Stack direction={'row'}>
                            <TextField size='small' sx={{ flex: '1' }} label='Enter voucher code' type='text' variant='outlined' />
                            <Button variant='contained' >Redeem</Button>
                        </Stack>
                    </Paper>
                </Stack>
                <Divider />

                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="All Vouchers" {...a11yProps(0)} />
                            <Tab label="Latest" {...a11yProps(1)} />
                            <Tab label="Popular" {...a11yProps(2)} />
                            <Tab label="Expiring" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        Item One
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>

            </Stack >
        </>
    )
}

export default AccountVouchers