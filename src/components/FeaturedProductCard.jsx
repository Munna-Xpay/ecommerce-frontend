import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../redux/baseUrl'

const FeaturedProductCard = ({ product }) => {
    return (
        <Stack direction={'row'} spacing={2} sx={{ border: '2px solid #F4F6F8', p: '15px', borderRadius: '15px' }}>
            <Box
                component={'img'}
                alt='product Image'
                src={`${BASE_URL}/uploadedFiles/${product?.thumbnail}`}
                sx={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '15px', bgcolor: '#F4F6F8' }}
            />
            <Stack width={'100%'}>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.9' }} >{product?.title}</Typography>
                <Typography variant='subtitle1' sx={{ opacity: '.7' }} >Baby and Kids</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.7' }} >₹ {product?.discounted_price}</Typography>
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <Link to={'/product/' + product._id}><Button size='small' variant='contained' sx={{ backgroundColor: '#212B36', color: '#efefef' }} >Buy Now</Button></Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FeaturedProductCard