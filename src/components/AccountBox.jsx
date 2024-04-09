import React, { useEffect, useState } from 'react'
import { Avatar, Button, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../redux/baseUrl';
import { updateProfilePic } from '../redux/userSlice';

const AccountBox = ({ setIsDraweOpen }) => {

    const user = useSelector((state) => state.userReducer.user)
    const dispatch = useDispatch()
    const [proPic, setProPic] = useState(null)
    const [proPicUrl, setProPicUrl] = useState("")
    console.log(user)

    useEffect(() => {
        proPic && setProPicUrl(URL.createObjectURL(proPic))
    }, [proPic])

    const handleProfileUpdate = () => {
        if (proPic) {
            const body = new FormData();
            body.append("profileImage", proPic)
            dispatch(updateProfilePic(body));
            setProPic(null)
            setProPicUrl("")
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        window.location.reload()
    }

    return (
        <Stack spacing={2} sx={{ border: '2px solid #efefef', borderRadius: '15px', padding: '20px' }}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Avatar src={proPicUrl ? proPicUrl : (user?.profileImage ? `${BASE_URL}/uploadedFiles/${user?.profileImage}` : 'https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg')} sx={{ width: '70px', height: '70px' }} />
                <Stack alignItems={'flex-end'}>
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
                            onChange={(e) => setProPic(e.target.files[0])}
                        />
                    </Button>
                    <IconButton
                        size='small'
                        variant="contained"
                        onClick={handleProfileUpdate}
                    >
                        <SaveIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack>
                <Typography variant='subtitle1' sx={{ opacity: '.9', fontWeight: 'bolder' }}>{user?.fullName}</Typography>
                <Typography variant='subtitle2' sx={{ opacity: '.8' }}>{user?.email}</Typography>
            </Stack>
            <Divider />
            <Stack spacing={1}>
                <Link to={'/account/personal'} onClick={() => setIsDraweOpen(false)} style={{ textDecoration: 'none' }}><Button sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<PersonOutlineOutlinedIcon fontSize='large' />}>Personal Info</Button></Link>
                <Link to={'/account/wishlist'} onClick={() => setIsDraweOpen(false)} style={{ textDecoration: 'none' }}><Button sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<FavoriteBorderOutlinedIcon fontSize='large' />}>Wishlist</Button></Link>
                <Link to={'/account/vouchers'} onClick={() => setIsDraweOpen(false)} style={{ textDecoration: 'none' }}><Button sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<RedeemOutlinedIcon fontSize='large' />}>Vouchers</Button></Link>
                <Link to={'/account/orders'} onClick={() => setIsDraweOpen(false)} style={{ textDecoration: 'none' }}><Button sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<GradingOutlinedIcon fontSize='large' />}>Orders</Button></Link>
            </Stack>
            <Divider />
            <Button onClick={handleLogout} sx={{ display: 'flex', justifyContent: 'flex-start', color: '#212121', padding: '10px' }} startIcon={<LogoutOutlinedIcon fontSize='large' />}>Logout</Button>
        </Stack>
    )
}

export default AccountBox