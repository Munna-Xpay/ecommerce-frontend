import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Stack justifyContent={'center'} spacing={2} alignItems={'center'} sx={{ minHeight: '100vh' }}>
            <Typography variant='h4' sx={{ opacity: '.8', fontWeight: 'bold' }}>Page Not Found!</Typography>
            <Typography variant='body1' sx={{ opacity: '.6', maxWidth: '400px', textAlign: 'center' }}>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</Typography>
            <Box
                component={'img'}
                alt='not found image'
                src='https://zone-ui.vercel.app/assets/illustrations/illustration_404.svg'
                sx={{ width: '350px' }}
            />
            <Link to={'/products'}><Button variant='contained' sx={{ bgcolor: '#212B36' }}>Go To Home</Button></Link>
        </Stack>
    )
}

export default NotFound