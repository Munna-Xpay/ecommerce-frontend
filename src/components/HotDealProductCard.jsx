import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HotDealProductCard = ({ hotDeal, isTopProduct }) => {
    return (
        <Link to={'/product/1'} style={{ textDecoration: 'none' }}><Stack spacing={1} p={2} sx={{ border: '2px solid #F4F6F8', cursor: 'pointer', borderRadius: '10px', '&:hover': { backgroundColor: '#F4F6F8', transition: '.2s' } }} >
            <Box
                component={'img'}
                alt='product image'
                src='https://zone-ui.vercel.app/assets/images/z_product/product_1.png'
                sx={{ backgroundColor: '#F4F6F8', width: '100%', height: isTopProduct ? { xs: '160px', md: '210px' } : '130px', objectFit: 'contain', borderRadius: '10px' }}
            />
            <Typography variant='subtitle2' sx={{ opacity: '.8', color: 'black' }}>Apple iPhone</Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', color: hotDeal ? 'red' : 'black' }}>$132.72</Typography>
            {hotDeal && <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', textAlign: 'end', color: 'black' }}>🔥 763 sold</Typography>}
        </Stack></Link>
    )
}

export default HotDealProductCard