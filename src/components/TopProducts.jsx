import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import HotDealProductCard from './HotDealProductCard'
import TopProductCard from './TopProductCard'

const TopProducts = () => {
    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Featured Products</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3} px={2}>
                    <HotDealProductCard isTopProduct />
                </Grid>
                <Grid item xs={6} md={3} px={2}>
                    <HotDealProductCard isTopProduct />
                </Grid>
                <Grid item xs={6} md={3} px={2}>
                    <HotDealProductCard isTopProduct />
                </Grid>
                <Grid item xs={6} md={3} px={2}>
                    <HotDealProductCard isTopProduct />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TopProductCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack height={'100%'} spacing={2}>
                        <TopProductCard isSmall />
                        <TopProductCard isSmall />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default TopProducts