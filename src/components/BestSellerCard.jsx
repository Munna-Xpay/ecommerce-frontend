import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BestSellerCard = ({ product }) => {
    return (
        <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Link to={'product/1'} style={{ textDecoration: 'none', color: 'black' }}>
                <Box
                    component="img"
                    src={product?.thumbnail}
                    alt="green iguana"
                    sx={{ objectFit: 'contain', height: '80px', width: '80px', borderRadius: '12px' }}

                />
            </Link>
            <Stack spacing={1}>
                <Typography variant="body2" sx={{ opacity: '.8', fontWeight: '500' }}>{product?.title}</Typography>
                <Stack direction={'row'}>
                    <Rating value={product?.review_star} readOnly size='small' />
                    <Typography variant="body2" sx={{ opacity: '.6', fontWeight: '500' }}>{product?.product_sold} sold</Typography>
                </Stack>
                <Typography variant="body2" sx={{ opacity: '.8', fontWeight: '500' }}>₹ {product?.discounted_price} <Typography variant="body2" component={'span'} sx={{ textDecoration: 'line-through', opacity: '.6' }}>₹ {product?.original_price}</Typography></Typography>
            </Stack>

        </Stack>
    )
}

export default BestSellerCard