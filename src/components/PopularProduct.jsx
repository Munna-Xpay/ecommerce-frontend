import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomTabPanel from './CustomTabPanel';
import AllPopularProducts from './AllPopularProducts';

const PopularProduct = () => {

  const [value, setValue] = useState(0);

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
    <Stack spacing={4} >
      <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Popular Products</Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Featured Products" {...a11yProps(0)} />
            <Tab label="Top rated Products" {...a11yProps(1)} />
            <Tab label="Onsale Products" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AllPopularProducts />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AllPopularProducts />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AllPopularProducts />
        </CustomTabPanel>
      </Box>
    </Stack>
  )
}

export default PopularProduct