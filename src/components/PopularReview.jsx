import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PopularReviewCard from './PopularReviewCard';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PopularReview = () => {
    return (
        <Stack spacing={4} mb={6}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Popular Reviews</Typography>
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

                <Stack direction={'row'} justifyContent={'center'}>
                    <span style={{ backGroundColor: 'red', textAlign: 'center' }} class="pagination"></span>
                </Stack>
            </Swiper >
            <Divider />
        </Stack>
    )
}

export default PopularReview