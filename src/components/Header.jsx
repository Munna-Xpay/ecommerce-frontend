import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/products'} style={{ color: '#efefef', textDecoration: 'none' }}>Categories</Link>
                    </Typography>
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header