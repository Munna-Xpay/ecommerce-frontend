import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import BestSellerCard from './BestSellerCard';
import { useSelector } from 'react-redux';

const PopularProduct = () => {

  const popularProducts = useSelector(state => state.productReducer.allProducts.map(item => item).sort((a, b) => b.review_star - a.review_star))
  const showPopularProducts = popularProducts.map((product, index) => {
    if (index < 8) {
      return (
        <Grid item xs={12} p={3} md={3}>
          <BestSellerCard product={product} />
        </Grid>
      )
    }
  })


  return (
    <Stack spacing={4} >
      <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Popular Products</Typography>
      <Grid container mt={2} spacing={2}>
        {showPopularProducts}
      </Grid>
    </Stack>
  )
}

export default PopularProduct