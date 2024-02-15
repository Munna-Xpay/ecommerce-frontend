import { Grid } from '@mui/material'
import React from 'react'
import VoucherCard from './VoucherCard'

const VoucherCardContainer = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VoucherCard />
                </Grid>
            </Grid>
        </>
    )
}

export default VoucherCardContainer