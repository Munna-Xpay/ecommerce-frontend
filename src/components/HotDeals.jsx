import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HotDealProductCard from './HotDealProductCard';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getCountDownTime } from '../countdownTimer';


const HotDeals = () => {

    const [countdown, setCountdown] = useState(() => getCountDownTime('2024-02-16T23:59:59'))

    useEffect(() => {
        setInterval(() => {
            setCountdown(() => getCountDownTime('2024-02-15T23:59:59'))
        }, 1000)
    }, [])

    return (
        <Stack spacing={4} >
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>🔥 Hot Deal Today</Typography>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold' }} variant="rounded">
                            {countdown.hour}
                        </Avatar>
                        <Typography variant='h4'>:</Typography>
                        <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold' }} variant="rounded">
                            {countdown.minute}
                        </Avatar>
                        <Typography variant='h4'>:</Typography>
                        <Avatar sx={{ bgcolor: '#131D2C', fontWeight: 'bold' }} variant="rounded">
                            {countdown.second}
                        </Avatar>
                    </Stack>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    <div className='prev' ><NavigateBeforeIcon sx={{ p: 1, cursor: 'pointer', '&:hover': { borderRadius: '50%', backgroundColor: '#F4F6F8' } }} /></div>
                    <div className='next' ><NavigateNextIcon sx={{ p: 1, cursor: 'pointer', '&:hover': { borderRadius: '50%', backgroundColor: '#F4F6F8' } }} /></div>
                </Stack>
            </Stack>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                pagination={{
                    el: '.pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="dot swiper-pagination-bullet"></span>`;
                    }
                }}
                breakpoints={{
                    // when window width is <= 499px
                    299: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 10
                    },
                    // when window width is <= 999px
                    999: {
                        slidesPerView: 6,
                        spaceBetweenSlides: 20
                    }
                }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <SwiperSlide>
                    <HotDealProductCard hotDeal />
                </SwiperSlide>
                <Stack direction={'row'} justifyContent={'center'}>
                    <span style={{ backGroundColor: 'red', textAlign: 'center' }} class="pagination"></span>
                </Stack>
            </Swiper >
        </Stack >
    )
}

export default HotDeals