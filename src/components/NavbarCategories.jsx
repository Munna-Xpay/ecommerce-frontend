import { Divider, Grid, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarCategories = () => {
    return (
        <Stack spacing={2} p={4} >
            <Typography variant='subtitle1' fontWeight={'bold'}>Categories</Typography>
            <Divider />
            <Stack>
                <Typography sx={{ fontWeight: 'bold' }}>Other Machinery & Parts</Typography>
                <List>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Metallic Processing Machinery" />
                    </ListItem></Link>
                </List>
            </Stack>
            <Stack>
                <Typography sx={{ fontWeight: 'bold' }}>PLASTIC & WOODWORKING</Typography>
                <List>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Plastic Machinery" />
                    </ListItem></Link>
                </List>
            </Stack>
            <Stack>
                <Typography sx={{ fontWeight: 'bold' }}>CONSTRUCTION MACHINERY</Typography>
                <List>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="CNC Machine Tools" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="CNC Machine Tools" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="CNC Machine Tools" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="CNC Machine Tools" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="CNC Machine Tools" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="CNC Machine Tools" />
                    </ListItem></Link>
                </List>
            </Stack>
            <Stack>
                <Typography sx={{ fontWeight: 'bold' }}>Construction Machinery</Typography>
                <List>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Building Material Making Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Building Material Making Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Building Material Making Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Building Material Making Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Building Material Making Machinery" />
                    </ListItem></Link>
                </List>
            </Stack>
            <Stack>
                <Typography sx={{ fontWeight: 'bold' }}>Agriculture Machinery</Typography>
                <List>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                    <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                        <ListItemText sx={{ opacity: '.7' }} primary="Feed Processing Machinery" />
                    </ListItem></Link>
                </List>
            </Stack>
        </Stack>
    )
}

export default NavbarCategories