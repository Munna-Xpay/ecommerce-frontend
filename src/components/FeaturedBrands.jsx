import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedBrands = () => {
    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Featured Brand</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} >
                    <Stack spacing={2} sx={{ height: '100%', border: '2px solid #efefef', borderRadius: '15px' }} px={6} justifyContent={'center'} alignItems={'center'}>
                        <Box
                            component={'img'}
                            alt='brand icon'
                            src='https://th.bing.com/th/id/OIP.mk3s-9fcXZtUsQJXX_nrzwHaIf?rs=1&pid=ImgDetMain'
                            sx={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.8' }}>Apple</Typography>
                        <Typography variant='body2' sx={{ opacity: '.6', textAlign: 'center' }}>While most people enjoy casino gambling, sports betting, lottery and bingo playing.</Typography>
                        <Button endIcon={<KeyboardArrowRightIcon sx={{ marginLeft: '5px' }} fontSize='small' />}>More Details</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <FeaturedProductCard />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeaturedProductCard />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeaturedProductCard />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeaturedProductCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default FeaturedBrands