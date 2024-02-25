import { Avatar, Container, Divider, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductReviews = ({ review }) => {
    return (
        <Container sx={{ marginBottom: '20px' }}>
            <Stack direction={'row'} spacing={3}>
                <Avatar sx={{ width: 70, height: 70 }} src={review?.reviewFrom?.profileImage ? review?.reviewFrom?.profileImage : 'https://zone-ui.vercel.app/assets/images/avatar/avatar_5.jpg'} alt='avatar' />
                <Stack spacing={2}>
                    <Rating readOnly value={review?.review_stars} />
                    <Typography sx={{ fontWeight: 'bolder', opacity: '.8' }}>{review?.username}</Typography>
                    <Typography sx={{ fontWeight: 'bolder', opacity: '.6' }}>{new Date(review?.date).toLocaleString()}</Typography>
                    <Typography sx={{ fontWeight: 'bolder', opacity: '.8' }}>{review.review}</Typography>
                </Stack>
            </Stack>
            <Divider sx={{ marginTop: '50px', width: '100%' }} />
        </Container>
    )
}

export default ProductReviews   