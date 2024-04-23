import { AppBar, Badge, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavbarCategories from './NavbarCategories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategory } from '../redux/categorySlice';
import { fetchCartItems } from '../redux/cartSlice';
import { getWishlistProducts } from '../redux/wishlistSlice';
import { userById } from '../redux/userSlice';
import HomeIcon from '@mui/icons-material/Home';
import toast, { Toaster } from 'react-hot-toast';
import { fetchAllOrders } from '../redux/orderSlice';

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const socket = useSelector(state => state.socketReducer.socket)
    const cartitems = useSelector(state => state.cartReducer.cartItems)
    const user = useSelector(state => state.userReducer)
    const [drawer, setDrawer] = useState(false)
    const [notifyMsg, setNotifyMsg] = useState("")
    const wishlistitems = useSelector(state => state.wishlistReducer.wishlistProducts)
    //console.log(wishlistitems);
    console.log(user)

    useEffect(() => {
        socket && socket?.on("getUpdateNotify", (msg) => {
            setNotifyMsg(msg)
            dispatch(fetchAllOrders())
            //console.log(msg)
        })
    }, [socket])

    useEffect(() => {
        notifyMsg && toast.success(notifyMsg, { duration: 5000 })
    }, [notifyMsg])

    useEffect(() => {
        if (user && user?.user?.isBlocked) {
            alert("You are blocked by admin !")
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            window.location.reload()
        }
    }, [user])

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        console.log(token)
        console.log(userId)
        if (user.user == null && token) {
            dispatch(userById(userId))
        } else if (!token) {
            navigate('/login')
        }
        else {
            dispatch(fetchAllCategory())
            dispatch(fetchCartItems())
            dispatch(getWishlistProducts())
        }
    }, [user.user])

    const handleLogOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        window.location.reload()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
                    <Stack direction={'row'} alignItems={'center'}>
                        {user.user && <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Shoppify</Link>
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                        {
                            !user.user ?
                                <Link to={'/login'}>
                                    <Button variant='text' sx={{ color: '#efefef' }}>Log in</Button>
                                </Link>
                                :
                                <Button onClick={handleLogOut} variant='text' sx={{ color: '#efefef' }}>Log out</Button>
                        }
                        {user.user && <Link to={'/products'}>
                            <IconButton sx={{ ml: 1 }}>
                                <HomeIcon sx={{ color: '#efefef' }} />
                            </IconButton>
                        </Link>}
                        {user.user && <Link to={'/wishlist'}>
                            <IconButton sx={{ ml: 1 }}>
                                <Badge badgeContent={wishlistitems.length} color="error">
                                    <FavoriteBorderIcon sx={{ color: '#efefef' }} />
                                </Badge>
                            </IconButton>
                        </Link>}
                        {user.user && <Link to={'/cartlist'}>
                            <IconButton sx={{ ml: 1 }}>
                                <Badge badgeContent={cartitems.length} color="error">
                                    <ShoppingCartOutlinedIcon sx={{ color: '#efefef' }} />
                                </Badge>
                            </IconButton>
                        </Link>}
                        {user.user && <Link to={'/account/personal'}>
                            <IconButton sx={{ ml: 1 }}>
                                <AccountCircleOutlinedIcon sx={{ color: '#efefef' }} />
                            </IconButton>
                        </Link>}
                    </Stack>
                </Container>
            </AppBar>

            <Drawer
                anchor='left'
                open={drawer}
                onClose={() => setDrawer(false)}
            >
                <NavbarCategories setDrawer={setDrawer} />
            </Drawer>
            <Toaster />
        </Box >
    )
}

export default Header