import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HotDealProductCard from './HotDealProductCard'
import { Link } from 'react-router-dom'
import { getCountDownTime } from '../countdownTimer'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../redux/baseUrl'

const FeaturedProducts = () => {

    const [countdown, setCountdown] = useState(() => getCountDownTime('2024-02-28T23:59:59'))
    const featuredProducts = useSelector(state => state.productReducer.allProducts.filter((item) => item.isFeaturedProduct))


    const showFeaturedProducts = featuredProducts.map((item, index) => {
        if (index < 3) {
            return (
                <Grid item xs={12} md={4} >
                    <Link style={{ textDecoration: 'none' }} to={'product/' + item._id}>
                        <Stack spacing={2} alignItems={'center'} p={3} sx={{ borderRadius: '15px', border: '3px solid #F4F6F8', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', '&:hover': { backgroundColor: '#F4F6F8', transition: '.2s' } }}>
                            <Box
                                component={'img'}
                                alt='product image'
                                src={`${BASE_URL}/uploadedFiles/${item?.thumbnail}`}
                                sx={{ width: '100%', height: '300px', objectFit: 'contain' }}
                            />
                            <Typography variant='body2' sx={{ color: '#770508', fontWeight: 'bold', opacity: '.8' }}>{item?.title}</Typography>
                            <Typography variant='subtitle1' sx={{ color: '#770508', fontWeight: 'bold' }}>From ₹{item?.discounted_price}</Typography>
                            <Stack direction={'row'} alignItems={'start'} spacing={1}>
                                <Stack alignItems={'center'}>
                                    <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold', width: '50px' }} variant="rounded">
                                        {countdown.day}
                                    </Avatar>
                                    <Typography variant='body2'>Days</Typography>
                                </Stack>
                                <Typography variant='h4'>:</Typography>
                                <Stack alignItems={'center'}>
                                    <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold', width: '50px' }} variant="rounded">
                                        {countdown.hour}
                                    </Avatar>
                                    <Typography variant='body2'>Hours</Typography>
                                </Stack>
                                <Typography variant='h4'>:</Typography>
                                <Stack alignItems={'center'}>
                                    <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold', width: '50px' }} variant="rounded">
                                        {countdown.minute}
                                    </Avatar>
                                    <Typography variant='body2'>Minutes</Typography>
                                </Stack>
                                <Typography variant='h4'>:</Typography>
                                <Stack alignItems={'center'}>
                                    <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold', width: '50px' }} variant="rounded">
                                        {countdown.second}
                                    </Avatar>
                                    <Typography variant='body2'>Seconds</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Link>
                </Grid>
            )
        }
    })

    useEffect(() => {
        setInterval(() => {
            setCountdown(() => getCountDownTime('2024-02-28T23:59:59'))
        }, 1000)
    }, [])

    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Featured Products</Typography>
            <Grid container spacing={3}>
                {showFeaturedProducts}
            </Grid>
        </Stack>
    )
}

export default FeaturedProducts