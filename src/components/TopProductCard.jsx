import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';


const TopProductCard = ({ isSmall }) => {
    return (
        <Stack justifyContent={'space-between'} direction={isSmall ? 'row-reverse' : 'column'} p={4} alignItems={'center'} sx={{ backgroundColor: '#F4F6F8', borderRadius: '15px', flex: '1' }}>
            <Box
                component={'img'}
                alt='product image'
                src='https://zone-ui.vercel.app/assets/images/z_product/product_7.png'
                sx={{ width: '100%', height: { xs: '160px', md: isSmall ? '200px' : '400px' }, objectFit: 'contain', borderRadius: '10px' }}
            />
            <Stack direction={isSmall ? 'column' : 'row'} width={'100%'} height={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack spacing={1}>
                    <Typography variant='h6' sx={{ opacity: '.8' }}>Tesla Model S</Typography>
                    <Typography variant='h6' sx={{ opacity: '.5', fontWeight: 'bold' }}>$43.84</Typography>
                </Stack>
                <Link to={'/product/1'}><Button endIcon={<KeyboardArrowRightIcon fontSize='small' />}>More Details</Button></Link>
            </Stack>
        </Stack>
    )
}

export default TopProductCard