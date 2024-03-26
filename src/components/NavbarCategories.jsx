import { Divider, Grid, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavbarCategories = ({ setDrawer }) => {

    const categories = useSelector(state => state.categoryReducer.allCategories)
    // console.log(categories)
    return (
        <Stack spacing={2} p={4} sx={{ width: { xs: "200px", md: "200px" } }}>
            <Typography variant='subtitle1' fontWeight={'bold'}>Categories</Typography>
            <Divider />
            {
                categories.map((item, index) => (
                    < Stack >
                        <Link to={'/products/' + item?._id} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setDrawer(false)}><Typography sx={{ fontWeight: 'bold' }}>{item?._id}</Typography></Link>
                        <List>
                            {
                                item?.sub_categories?.map((sub, index) => (
                                    < Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}><ListItem disablePadding>
                                        <ListItemText sx={{ opacity: '.7' }} primary={sub} />
                                    </ListItem></Link>
                                ))
                            }
                        </List>
                    </Stack>
                ))
            }
        </Stack >
    )
}

export default NavbarCategories