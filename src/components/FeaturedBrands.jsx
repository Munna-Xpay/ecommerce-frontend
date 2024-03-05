import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FeaturedProductCard from './FeaturedProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/productSlice';

const FeaturedBrands = () => {

    const dispatch = useDispatch()
    const featuredBrand = useSelector(state => state.productReducer.allProducts.find((item) => item.isFeaturedBrand))
    console.log(featuredBrand)
    const featuredBrandProducts = useSelector(state => state.productReducer.allProducts?.filter((item) => item?.manufacturer == featuredBrand?.manufacturer))

    const showAllBrandProducts = featuredBrandProducts.map((item, index) => {
        if (index < 4) {
            return (
                <Grid item xs={12} md={6}>
                    <FeaturedProductCard product={item} />
                </Grid>
            )
        }
    })

    useEffect(() => {
        dispatch(fetchAllProducts({}))
    }, [])

    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Featured Brand</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} >
                    <Stack spacing={2} sx={{ height: '100%', border: '2px solid #efefef', borderRadius: '15px' }} px={6} justifyContent={'center'} alignItems={'center'}>
                        {
                            featuredBrand?.brand_icon &&
                            <Box
                                component={'img'}
                                alt='brand icon'
                                src={featuredBrand?.brand_icon}
                                sx={{ width: '50px', height: '50px', objectFit: 'contain' }}
                            />
                        }
                        <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.8' }}>{featuredBrand?.manufacturer}</Typography>
                        <Typography variant='body2' sx={{ opacity: '.6', textAlign: 'center' }}>While most people enjoy casino gambling, sports betting, lottery and bingo playing.</Typography>
                        <Button endIcon={<KeyboardArrowRightIcon sx={{ marginLeft: '5px' }} fontSize='small' />}>More Details</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {showAllBrandProducts}
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default FeaturedBrands