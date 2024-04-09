import { Box, Button, Container, Drawer, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import ProductSidebar from '../components/ProductSidebar'
import { useDispatch } from 'react-redux'
import { fetchAllProducts, fetchBrands } from '../redux/productSlice'
import { fetchAllCategory } from '../redux/categorySlice'
import { useParams } from 'react-router-dom'

const CategoryProductItems = () => {

    const { category } = useParams();
    console.log(category)
    const dispatch = useDispatch()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() => {
        dispatch(fetchBrands())
        dispatch(fetchAllCategory())
        dispatch(fetchAllProducts({ category }))
    }, [])

    return (
        <Box>
            <Container sx={{ padding: '50px 0px' }}>
                <Typography gutterBottom variant='h4' sx={{ fontWeight: 'bolder', opacity: '.8' }}>Catalog</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }} sm={3.5}>
                        <ProductSidebar currentCategory={category} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8.5}>
                        <Stack sx={{ display: { xs: 'flex', md: 'none' } }} direction={'row'} justifyContent={'flex-end'}>
                            <Button onClick={() => setIsDrawerOpen(true)} variant='contained' color='primary'>Filter</Button>
                        </Stack>
                        <ProductList category={category} />
                    </Grid>
                </Grid>
            </Container>

            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box sx={{ width: '60vw', padding: '10px' }}>
                    <ProductSidebar currentCategory={category} />
                </Box>
            </Drawer>
        </Box>
    )
}

export default CategoryProductItems