import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BestSellerCard = () => {
    return (
        <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Link to={'product/1'} style={{ textDecoration: 'none', color: 'black' }}>
                <Box
                    component="img"
                    src="https://zone-ui.vercel.app/assets/images/z_product/product_3.png"
                    alt="green iguana"
                    sx={{ backgroundColor: 'rgb(244, 246, 248)', objectFit: 'contain', height: '80px', width: '80px', borderRadius: '12px' }}

                />
            </Link>
            <Stack spacing={1}>
                <Typography variant="body2" sx={{ opacity: '.8', fontWeight: '500' }}>Apple iPhone</Typography>
                <Stack direction={'row'}>
                    <Rating size='small' />
                    <Typography variant="body2" sx={{ opacity: '.6', fontWeight: '500' }}>497 sold</Typography>
                </Stack>
                <Typography variant="body2" sx={{ opacity: '.8', fontWeight: '500' }}>$83.74 $ <Typography variant="body2" component={'span'} sx={{ textDecoration: 'line-through', opacity: '.6' }}>$83.74</Typography></Typography>
            </Stack>

        </Stack>
    )
}

export default BestSellerCard