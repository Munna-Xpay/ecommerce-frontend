import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <Stack sx={{ backgroundColor: "#F8F8F8", backdropFilter: 'blur(10)', borderRadius: '20px' }} spacing={2} width={'100%'} justifyContent={'center'}>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <Grid container alignItems={'center'} p={6}>
                            <Grid item xs={12} md={6} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start' }, gap: '25px' }} >
                                <Typography sx={{ padding: '5px 10px', backgroundColor: 'rgba(255, 171, 0, 0.16)', color: '#B76E00', fontWeight: 'bold', borderRadius: '50px' }}>Opening Sale Discount 50%</Typography>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', }}>Arizona Soft Footbed Sandal</Typography>
                                <Typography variant='body1' sx={{ opacity: '.5' }}>runt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.</Typography>
                                <Link to={'/product/1'}><Button size='large' variant='contained' sx={{ backgroundColor: '#212B36' }}>Shop Now</Button></Link>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    src='https://zone-ui.vercel.app/assets/images/z_product/product_4.png'
                                    alt='product image'
                                    component={'img'}
                                    width={'100%'}
                                    height={'400px'}
                                    sx={{ objectFit: 'contain' }}
                                />
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container alignItems={'center'} p={6}>
                            <Grid item xs={12} md={6} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '25px' }} >
                                <Typography sx={{ padding: '5px 10px', backgroundColor: 'rgba(255, 171, 0, 0.16)', color: '#B76E00', fontWeight: 'bold', borderRadius: '50px' }}>Opening Sale Discount 50%</Typography>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', }}>Arizona Soft Footbed Sandal</Typography>
                                <Typography variant='body1' sx={{ opacity: '.5' }}>runt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.</Typography>
                                <Button size='large' variant='contained' sx={{ backgroundColor: '#212B36' }}>Shop Now</Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    src='https://zone-ui.vercel.app/assets/images/z_product/product_4.png'
                                    alt='product image'
                                    component={'img'}
                                    width={'100%'}
                                    height={'400px'}
                                    sx={{ objectFit: 'contain' }}
                                />
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container alignItems={'center'} p={6}>
                            <Grid item xs={12} md={6} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '25px' }} >
                                <Typography sx={{ padding: '5px 10px', backgroundColor: 'rgba(255, 171, 0, 0.16)', color: '#B76E00', fontWeight: 'bold', borderRadius: '50px' }}>Opening Sale Discount 50%</Typography>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', }}>Arizona Soft Footbed Sandal</Typography>
                                <Typography variant='body1' sx={{ opacity: '.5' }}>runt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.</Typography>
                                <Button size='large' variant='contained' sx={{ backgroundColor: '#212B36' }}>Shop Now</Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    src='https://zone-ui.vercel.app/assets/images/z_product/product_1.png'
                                    alt='product image'
                                    component={'img'}
                                    width={'100%'}
                                    height={'400px'}
                                    sx={{ objectFit: 'contain' }}
                                />
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container alignItems={'center'} p={6}>
                            <Grid item xs={12} md={6} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '25px' }} >
                                <Typography sx={{ padding: '5px 10px', backgroundColor: 'rgba(255, 171, 0, 0.16)', color: '#B76E00', fontWeight: 'bold', borderRadius: '50px' }}>Opening Sale Discount 50%</Typography>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', }}>Arizona Soft Footbed Sandal</Typography>
                                <Typography variant='body1' sx={{ opacity: '.5' }}>runt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.</Typography>
                                <Button size='large' variant='contained' sx={{ backgroundColor: '#212B36' }}>Shop Now</Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    src='https://zone-ui.vercel.app/assets/images/z_product/product_4.png'
                                    alt='product image'
                                    component={'img'}
                                    width={'100%'}
                                    height={'400px'}
                                    sx={{ objectFit: 'contain' }}
                                />
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                </Swiper >
            </Stack>

        </>
    )
}

export default Hero