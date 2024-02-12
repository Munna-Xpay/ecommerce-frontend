import { Avatar, Container, Divider, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductReviews = () => {
    return (
        <Container sx={{marginBottom:'20px'}}>
            <Stack direction={'row'} spacing={3}>
                <Avatar sx={{ width: 70, height: 70 }} src='https://zone-ui.vercel.app/assets/images/avatar/avatar_5.jpg' alt='avatar' />
                <Stack spacing={2}>
                    <Rating />
                    <Typography sx={{ fontWeight: 'bolder', opacity: '.8' }}>Jayvion Simon</Typography>
                    <Typography sx={{ fontWeight: 'bolder', opacity: '.6' }}>{new Date().toLocaleString()}</Typography>
                    <Typography sx={{ fontWeight: 'bolder', opacity: '.8' }}>She eagerly opened the gift, her eyes sparkling with excitement.</Typography>
                </Stack>
            </Stack>
            <Divider sx={{ marginTop: '50px', width: '100%' }} />
        </Container>
    )
}

export default ProductReviews   