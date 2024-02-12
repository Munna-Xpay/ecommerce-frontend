import React from 'react'
import { Avatar, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';

const AccountBox = () => {
    return (
        <Stack spacing={2} sx={{ border: '2px solid #efefef', borderRadius: '15px', padding: '20px' }}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Avatar src='https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg' sx={{ width: '70px', height: '70px' }} />
                <Button
                    size='small'
                    variant="text"
                    component="label"
                    startIcon={<DriveFileRenameOutlineIcon />}
                >
                    Change Photo
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </Stack>
            <Stack>
                <Typography variant='subtitle1' sx={{ opacity: '.9', fontWeight: 'bolder' }}>Jayvion Simon</Typography>
                <Typography variant='subtitle2' sx={{ opacity: '.8' }}>nannie_abernathy70@yahoo.com</Typography>
            </Stack>
            <Divider />
            <Stack spacing={1}>
                <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<PersonOutlineOutlinedIcon fontSize='large' />}>Personal Info</Button>
                <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<FavoriteBorderOutlinedIcon fontSize='large' />}>Wishlist</Button>
                <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<RedeemOutlinedIcon fontSize='large' />}>Vouchers</Button>
                <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<GradingOutlinedIcon fontSize='large' />}>Orders</Button>
            </Stack>
            <Divider />
            <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<LogoutOutlinedIcon fontSize='large' />}>Logout</Button>
        </Stack>
    )
}

export default AccountBox