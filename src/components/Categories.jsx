import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Categories = () => {

    const allCategories = useSelector(state => state.categoryReducer.allCategories)

    const showCategories = allCategories.map((item, index) => {
        if (index < 12) {
            return (
                <Grid item xs={6} sm={3} md={2} >
                    <Link to={'/products/' + item.category} style={{ textDecoration: 'none', color: 'inherit' }}><Stack alignItems={'center'} spacing={2} p={2} sx={{ border: '2px solid #efefef', borderRadius: '15px', cursor: 'pointer', '&:hover': { border: '2px solid grey' } }}>
                        <Box component={'img'} sx={{ width: '40px', height: '40px', backgroundColor: '#efefef', objectFit: 'contain', borderRadius: '50%' }} p={2} src={item?.category_icon} />
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }} >{item?.category}</Typography>
                    </Stack></Link>
                </Grid>
            )
        }
    })

    return (
        <Stack spacing={4} >
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9', textAlign: { xs: 'center', md: 'start' } }}>Categories</Typography>
            <Grid container spacing={2}>
                {showCategories}
            </Grid>
        </Stack >
    )
}

export default Categories