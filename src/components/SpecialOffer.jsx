import { Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Special Offer</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} px={2} >
                    {/* <Paper sx={{ height: '97%',padding:'0px 20px' }}> */}
                    <Stack spacing={2} px={2} sx={{ height: '97%', boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)' }} justifyContent={'center'} alignItems={'center'} >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.9', color: 'red', textAlign: { xs: 'center', md: 'start' } }}>NEW 2022</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Apple iPhone 14</Typography>
                        <Box sx={{ padding: '7px 15px', border: '2px solid #efefef', borderRadius: '10px' }} >
                            <Typography>From $999</Typography>
                        </Box>
                        <Divider sx={{ width: '100%' }} />
                        <Typography variant='body1' sx={{ opacity: '.7', textAlign: { xs: 'center', md: 'start' } }}>Deals Ens in :</Typography>
                    </Stack>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12} md={4} px={2}>
                    <Box
                        component={'img'}
                        alt='product image'
                        src='https://zone-ui.vercel.app/assets/images/z_product/product_5.png'
                        sx={{ width: '100%', height: '400px', objectFit: 'contain', backgroundColor: '#efefef', borderRadius: '15px' }}
                    />
                </Grid>
                <Grid item px={2} xs={12} md={4}>
                    <Stack spacing={3} alignItems={'start'} sx={{ height: '97%' }} justifyContent={'space-between'}>
                        <Stack spacing={1}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }}>Apple iPhone 14</Typography>
                            <Typography variant='body1' sx={{ opacity: '.7', textAlign: { xs: 'center', md: 'start' } }}>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun.</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Color</Typography>
                            <Stack direction={'row'} spacing={3} pl={2}>
                                <Box width={35} height={35} sx={{ background: 'red', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><DoneIcon sx={{ color: '#efefef' }} /></Box>
                                <Box width={35} height={35} sx={{ background: 'blue', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
                                <Box width={35} height={35} sx={{ background: 'green', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
                                <Box width={35} height={35} sx={{ background: 'gray', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
                            </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>Memory</Typography>
                            <Stack direction={'row'} spacing={3} pl={2}>
                                <Box sx={{ border: '1px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>32GB</Typography></Box>
                                <Box sx={{ border: '2px solid gray', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>64GB</Typography></Box>
                                <Box sx={{ border: '1px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>128GB</Typography></Box>
                                <Box sx={{ border: '1px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>256GB</Typography></Box>
                            </Stack>
                        </Stack>
                        <Link to={'/product/1'}><Button variant='contained'>Buy Now</Button></Link>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default SpecialOffer