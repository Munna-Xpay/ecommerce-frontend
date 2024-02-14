import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const PopularReviewCard = () => {
    return (
        <Stack p={3} spacing={1} sx={{ bgcolor: '#F4F6F8', borderRadius: '15px' }}>
            <Typography variant='body2' sx={{ opacity: '.5', fontWeight: 'bold' }}>12 Feb 2024</Typography>
            <Typography variant='body1' sx={{ opacity: '.7', fontWeight: 'bold' }}>Deja Bredy</Typography>
            <Rating value={3} />
            <Typography variant='body2' sx={{ opacity: '.6' }}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</Typography>
        </Stack>
    )
}

export default PopularReviewCard