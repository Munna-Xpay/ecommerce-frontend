import { Box, Button, Container, Drawer, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom'
import AccountBox from '../components/AccountBox';

const Account = () => {

    const [isDrawerOpen, setIsDraweOpen] = useState(false)

    return (
        <>
            <Container sx={{ padding: '30px 0px', opacity: '.8' }}>
                <Typography gutterBottom variant='h4' sx={{ fontWeight: 'bolder', display: { xs: 'none', md: 'block' } }}>Account</Typography>
                <Button sx={{ display: { xs: 'flex', justifyContent: 'center', md: 'none', padding: '10px' } }} onClick={() => setIsDraweOpen(true)} startIcon={<MenuIcon fontSize='small' />}>Account</Button>
                <Grid container spacing={4} sx={{ padding: '40px 0px' }}>
                    <Grid item xs={12} md={3.5}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <AccountBox />
                        </Box>
                    </Grid>
                    <Grid item xs={8.5}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>


            <Drawer sx={{backgroundColor:'#efefef'}} anchor='left' open={isDrawerOpen} onClose={() => setIsDraweOpen(false)} >
                <Box width={'250px'} p={1}>
                    <AccountBox />
                </Box>
            </Drawer>
        </>
    )
}

export default Account
