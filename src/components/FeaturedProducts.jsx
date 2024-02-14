import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import HotDealProductCard from './HotDealProductCard'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Featured Products</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} >
                    <Link style={{textDecoration:'none'}} to={'product/1'}><Stack spacing={2} alignItems={'center'} p={3} sx={{ borderRadius: '15px', backgroundColor: '#FEE9D1', '&:hover': { backgroundColor: '#F1D3B0', transition: '.2s' } }}>
                        <Box
                            component={'img'}
                            alt='product image'
                            src='https://zone-ui.vercel.app/assets/images/z_product/product_2.png'
                            sx={{ width: '100%', height: '300px', objectFit: 'contain' }}
                        />
                        <Typography variant='body2' sx={{ color: '#770508', fontWeight: 'bold', opacity: '.8' }}>Samsung Galaxy</Typography>
                        <Typography variant='subtitle1' sx={{ color: '#770508', fontWeight: 'bold' }}>From $97.41</Typography>
                    </Stack></Link>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Link style={{textDecoration:'none'}} to={'product/1'}> <Stack spacing={2} alignItems={'center'} p={3} sx={{ borderRadius: '15px', backgroundColor: '#E6DBFE', '&:hover': { backgroundColor: '#BFA9EE', transition: '.2s' } }}>
                        <Box
                            component={'img'}
                            alt='product image'
                            src='https://zone-ui.vercel.app/assets/images/z_product/product_3.png'
                            sx={{ width: '100%', height: '300px', objectFit: 'contain' }}
                        />
                        <Typography variant='body2' sx={{ color: '#1C0F79', fontWeight: 'bold', opacity: '.8' }}>Samsung Galaxy</Typography>
                        <Typography variant='subtitle1' sx={{ color: '#1C0F79', fontWeight: 'bold' }}>From $97.41</Typography>
                    </Stack></Link>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <HotDealProductCard />
                        </Grid>
                        <Grid item xs={6}>
                            <HotDealProductCard />
                        </Grid>
                        <Grid item xs={6}>
                            <HotDealProductCard />
                        </Grid>
                        <Grid item xs={6}>
                            <HotDealProductCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default FeaturedProducts