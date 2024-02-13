import { Grid } from '@mui/material'
import React from 'react'
import VoucherCard from './VoucherCard'

const VoucherCardContainer = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: '3px solid #efefef', borderRadius: '12px' }}>
                    <VoucherCard />
                </Grid>
            </Grid>
        </>
    )
}

export default VoucherCardContainer