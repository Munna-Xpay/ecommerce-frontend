import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PopularReviewCard from './PopularReviewCard';

const PopularReview = () => {
    return (
        <Stack spacing={4} mb={6}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Popular Reviews</Typography>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    // when window width is <= 499px
                    299: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 10
                    },
                    // when window width is <= 999px
                    999: {
                        slidesPerView: 4,
                        spaceBetweenSlides: 20
                    }
                }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <PopularReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularReviewCard />
                </SwiperSlide>
            </Swiper >
            <Divider />
        </Stack>
    )
}

export default PopularReview