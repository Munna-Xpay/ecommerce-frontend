import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const PopularReviewCard = ({ review }) => {
    return (
        <Stack p={3} spacing={1} sx={{ bgcolor: '#F4F6F8', borderRadius: '15px', minHeight: '150px' }}>
            <Typography variant='body2' sx={{ opacity: '.5', fontWeight: 'bold' }}>{new Date(review?.date).toLocaleString()}</Typography>
            <Typography variant='body1' sx={{ opacity: '.7', fontWeight: 'bold' }}>{review?.username}</Typography>
            <Rating value={review?.review_stars} readOnly />
            <Typography variant='body2' sx={{ opacity: '.6' }}>{review?.review}</Typography>
        </Stack>
    )
}

export default PopularReviewCard