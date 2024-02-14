import { Grid } from '@mui/material'
import React from 'react'
import BestSellerCard from './BestSellerCard'

const AllPopularProducts = () => {
    return (
        <Grid container mt={2} spacing={2}>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
            <Grid item xs={12} p={3} md={3}>
                <BestSellerCard />
            </Grid>
        </Grid>
    )
}

export default AllPopularProducts