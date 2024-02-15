import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Varification = () => {
    return (
        <Stack style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(https://www.goalcast.com/wp-content/uploads/2022/07/Goalcast-44-1-1100x610.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <Stack spacing={4} alignItems={'center'} justifyContent={'center'} p={3} sx={{ boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)', borderRadius: '15px', bgcolor: 'white' }}>
                <Box
                    component={'img'}
                    alt='varify image'
                    src='https://zone-ui.vercel.app/assets/icons/ic_email_inbox.svg'
                    sx={{ width: '90px', height: '90px', borderRadius: '50%', backgroundColor: '#F4F6F8' }}
                />
                <Stack spacing={2}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Check Your Email</Typography>
                    <Typography variant='body1' sx={{ opacity: '.6', maxWidth: '380px', textAlign: 'center' }}>We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</Typography>
                </Stack>
                <Stack spacing={3}>
                    <Stack direction={'row'} spacing={2} justifyContent={'center'}>
                        <TextField
                            variant='outlined'
                            sx={{ bgcolor: '#F4F6F8', width: '45px', textAlign: 'center' }}
                        />
                        <TextField
                            variant='outlined'
                            sx={{ bgcolor: '#F4F6F8', width: '45px' }}
                        />
                        <TextField
                            variant='outlined'
                            sx={{ bgcolor: '#F4F6F8', width: '45px' }}
                        />
                        <TextField
                            variant='outlined'
                            sx={{ bgcolor: '#F4F6F8', width: '45px' }}
                        />
                        <TextField
                            variant='outlined'
                            sx={{ bgcolor: '#F4F6F8', width: '45px' }}
                        />
                        <TextField
                            variant='outlined'
                            sx={{ bgcolor: '#F4F6F8', width: '45px' }}
                        />
                    </Stack>
                    <Button variant='contained' size='large' sx={{ bgcolor: '#212B36', color: 'white' }}>Verify</Button>
                    <Typography sx={{ textAlign: 'center', opacity: '.8' }}>Don't have a code<Link color='blue' sx={{ cursor: 'pointer' }}>Resen code</Link></Typography>
                </Stack>
                <Link to='/login'><Button startIcon={<ArrowBackIosIcon />} variant='text'>Return to Login</Button></Link>
            </Stack>
        </Stack >
    )
}

export default Varification