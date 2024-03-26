import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { BASE_URL } from '../redux/baseUrl'
import { Link } from 'react-router-dom'

const HotDealProductCard = ({ hotDeal, isTopProduct, product }) => {
    return (
        <Link to={'/product/' + product?._id} style={{ textDecoration: 'none' }}><Stack spacing={1} p={2} sx={{ border: '2px solid #F4F6F8', cursor: 'pointer', borderRadius: '10px', '&:hover': { backgroundColor: '#F4F6F8', transition: '.2s' } }} >
            <Box
                component={'img'}
                alt='product image'
                src={`${BASE_URL}/uploadedFiles/${product?.thumbnail}`}
                sx={{ width: '100%', height: isTopProduct ? { xs: '160px', md: '210px' } : '130px', objectFit: 'contain', borderRadius: '10px' }}
            />
            <Typography variant='subtitle2' sx={{ opacity: '.8', color: 'black' }}>{product.title.length > 17 ? `${product.title.slice(0, 17)}...` : product.title}</Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', color: hotDeal ? 'red' : 'black' }}>₹{product?.discounted_price}</Typography>
            {hotDeal && <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', textAlign: 'end', color: 'black' }}>🔥 763 sold</Typography>}
        </Stack></Link>
    )
}

export default HotDealProductCard