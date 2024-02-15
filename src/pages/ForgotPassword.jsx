import React from 'react'
import { Box, Container, Stack, TextField, Typography } from '@mui/material'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <Container sx={{ width: '400px' }}>
            <Stack sx={{
                width: {
                    xs: 300,
                    md: 350
                }
            }} spacing={3} borderRadius={5} padding={4} mt={5} boxShadow={15}>
                <Box textAlign={'center'}><img src="https://zone-ui.vercel.app/assets/icons/ic_lock_password.svg" alt="" /></Box>
                <Typography variant='h5' fontWeight={'bold'} textAlign={'center'}>Forgot Your Password?</Typography>
                <Typography fontSize={13} color={'gray'} textAlign={'center'}>Please enter the email address associated with your account and We will email you a link to reset your password.</Typography>
                <TextField InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: { xs: 300, md: 350 } }} label="Email Address" variant="filled" />
                <Typography fontSize={14} fontWeight={'bold'} textAlign={'center'}> <ArrowBackIosIcon sx={{ fontSize: "11px", }} /><Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}>Return to sign in</Link></Typography>
            </Stack>
        </Container>
    )
}

export default ForgotPassword