import { Avatar, Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import { getCountDownTime } from '../countdownTimer';
import { useSelector } from 'react-redux';

const SpecialOffer = () => {

    const specialOfferProduct = useSelector(state => state.productReducer.allProducts.find((item) => item.isSpacialOffer))
    const [countdown, setCountdown] = useState(() => getCountDownTime('2024-02-16T23:59:59'))
    const [selectedColor, setSelecetdColor] = useState(specialOfferProduct?.colors[0])
    const [selectedMemory, setselectedMemory] = useState(specialOfferProduct?.memory[0])

    useEffect(() => {
        setInterval(() => {
            setCountdown(() => getCountDownTime('2024-02-16T23:59:59'))
        }, 1000)
    }, [])

    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Special Offer</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} px={2} >
                    {/* <Paper sx={{ height: '97%',padding:'0px 20px' }}> */}
                    <Stack spacing={2} px={2} sx={{ height: { xs: '350px', md: '99%' }, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '15px' }} justifyContent={'center'} alignItems={'center'} >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.9', color: 'red', textAlign: { xs: 'center', md: 'start' } }}>NEW 2024</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>{specialOfferProduct?.title}</Typography>
                        <Box sx={{ padding: '7px 15px', border: '2px solid #efefef', borderRadius: '10px' }} >
                            <Typography>From ₹ {specialOfferProduct?.discounted_price}</Typography>
                        </Box>
                        <Divider sx={{ width: '100%' }} />
                        <Typography variant='body1' sx={{ opacity: '.7', textAlign: { xs: 'center', md: 'start' } }}>Deals Ens in :</Typography>
                        <Stack direction={'row'} alignItems={'start'} spacing={1}>
                            <Stack alignItems={'center'}>
                                <Avatar sx={{ fontWeight: 'bold', width: '50px', color: 'black' }} variant="rounded">
                                    {countdown.day}
                                </Avatar>
                                <Typography variant='body2'>Days</Typography>
                            </Stack>
                            <Typography variant='h4'>:</Typography>
                            <Stack alignItems={'center'}>
                                <Avatar sx={{ fontWeight: 'bold', width: '50px', color: 'black' }} variant="rounded">
                                    {countdown.hour}
                                </Avatar>
                                <Typography variant='body2'>Hours</Typography>
                            </Stack>
                            <Typography variant='h4'>:</Typography>
                            <Stack alignItems={'center'}>
                                <Avatar sx={{ fontWeight: 'bold', width: '50px', color: 'black' }} variant="rounded">
                                    {countdown.minute}
                                </Avatar>
                                <Typography variant='body2'>Minutes</Typography>
                            </Stack>
                            <Typography variant='h4'>:</Typography>
                            <Stack alignItems={'center'}>
                                <Avatar sx={{ fontWeight: 'bold', width: '50px', color: 'black' }} variant="rounded">
                                    {countdown.second}
                                </Avatar>
                                <Typography variant='body2'>Seconds</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12} md={4} px={2}>
                    <Box
                        component={'img'}
                        alt='product image'
                        src={specialOfferProduct?.thumbnail}
                        sx={{ width: '100%', height: '400px', objectFit: 'contain', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '15px' }}
                    />
                </Grid>
                <Grid item px={2} xs={12} md={4}>
                    <Stack spacing={3} alignItems={'start'} sx={{ height: '97%' }} justifyContent={'center'}>
                        <Stack spacing={1}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }}>{specialOfferProduct?.title}</Typography>
                            <Typography variant='body1' sx={{ opacity: '.7', textAlign: { xs: 'center', md: 'start' } }}>{specialOfferProduct?.about}</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Color</Typography>
                            <Stack direction={'row'} spacing={3} pl={2}>
                                {
                                    specialOfferProduct?.colors?.map((color, index) => (
                                        < Box onClick={() => setSelecetdColor(color)} width={35} height={35} sx={{ background: color, opacity: '.7', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: "1px solid gray" }}>{selectedColor == color && <DoneIcon sx={{ color: '#efefef' }} />}</Box>
                                    ))
                                }
                            </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            {specialOfferProduct?.memory.length > 0 && <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>Memory</Typography>}
                            <Stack direction={'row'} spacing={3} pl={2}>
                                {
                                    specialOfferProduct?.memory?.map((item, index) => (
                                        <Box onClick={() => setselectedMemory(item)} sx={{ border: selectedMemory == item ? '2px solid gray' : '2px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px', cursor: 'pointer' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>{item}</Typography></Box>
                                    ))
                                }
                            </Stack>
                        </Stack>
                        <Link to={'/product/' + specialOfferProduct?._id}><Button variant='contained'>Buy Now</Button></Link>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default SpecialOffer