import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Hero = () => {

    const bannerProducts = useSelector(state => state.productReducer.allProducts.filter((item) => item.isBanner))

    return (
        <>
            <Stack sx={{ border: "3px solid #F8F8F8", backdropFilter: 'blur(10)', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} spacing={2} width={'100%'} justifyContent={'center'}>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        el: '.pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="dot swiper-pagination-bullet"></span>`;
                        }
                    }}
                    autoplay={{
                        delay: 5000
                    }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        bannerProducts?.map((item, index) => (
                            <SwiperSlide>
                                <Grid container alignItems={'center'} p={6}>
                                    <Grid item xs={12} md={6} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start' }, gap: '25px' }} >
                                        <Typography sx={{ padding: '5px 10px', backgroundColor: 'rgba(255, 171, 0, 0.16)', color: '#B76E00', fontWeight: 'bold', borderRadius: '50px' }}>Opening Sale Discount {item?.original_price - item?.discounted_price} Rs off</Typography>
                                        <Typography variant='h4' sx={{ fontWeight: 'bold', }}>{item?.title}</Typography>
                                        <Typography variant='body1' sx={{ opacity: '.5' }}>{item?.about}</Typography>
                                        <Link to={'/product/' + item._id}><Button size='large' variant='contained' sx={{ backgroundColor: '#212B36' }}>Shop Now</Button></Link>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box
                                            src={item?.thumbnail}
                                            alt='product image'
                                            component={'img'}
                                            width={'100%'}
                                            height={'400px'}
                                            sx={{ objectFit: 'contain', borderRadius: '50px' }}
                                        />
                                    </Grid>
                                </Grid>
                            </SwiperSlide>

                        ))
                    }


                    <Stack direction={'row'} justifyContent={'center'} sx={{ marginBottom: '10px' }}>
                        <span style={{ backGroundColor: 'red', textAlign: 'center' }} class="pagination"></span>
                    </Stack>
                </Swiper >
            </Stack >

        </>
    )
}

export default Hero