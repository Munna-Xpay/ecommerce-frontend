import { AppBar, Badge, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavbarCategories from './NavbarCategories';


const Header = () => {

    const [drawer, setDrawer] = useState(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to={'/products'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Shoppify</Link>
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                            <Link to={'/login'}>
                            <Button variant='text' sx={{ color: '#efefef' }}>Log in</Button>
                        </Link>
                    <Link to={'/wishlist'}>
                            <IconButton sx={{ ml: 1 }}>
                                <Badge badgeContent={2} color="error">
                                    <FavoriteBorderIcon sx={{ color: '#efefef' }} />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to={'/cartlist'}>
                            <IconButton sx={{ ml: 1 }}>
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCartOutlinedIcon sx={{ color: '#efefef' }} />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to={'/account/personal'}>
                            <IconButton sx={{ ml: 1 }}>
                                <AccountCircleOutlinedIcon sx={{ color: '#efefef' }} />
                            </IconButton>
                        </Link>
                    </Stack>
                </Container>
            </AppBar>

            <Drawer
                anchor='left'
                open={drawer}
                onClose={() => setDrawer(false)}
            >
                <NavbarCategories />
            </Drawer>
        </Box >
    )
}

export default Header