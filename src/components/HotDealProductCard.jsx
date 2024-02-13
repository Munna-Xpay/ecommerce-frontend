import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HotDealProductCard = () => {
    return (
        <Link to={'/product/1'} style={{ textDecoration: 'none' }}><Stack spacing={1} p={2} sx={{ border: '2px solid #efefef', cursor: 'pointer', borderRadius: '10px', '&:hover': { backgroundColor: '#efefef', transition: '.2s' } }} >
            <Box
                component={'img'}
                alt='product image'
                src='https://zone-ui.vercel.app/assets/images/z_product/product_1.png'
                sx={{ backgroundColor: '#efefef', width: '100%', height: '130px', objectFit: 'contain', borderRadius: '10px' }}
            />
            <Typography variant='subtitle2' sx={{ opacity: '.8' }}>Apple iPhone</Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', color: 'red' }}>$132.72</Typography>
        </Stack></Link>
    )
}

export default HotDealProductCard