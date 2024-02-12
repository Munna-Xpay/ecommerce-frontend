import { Box, Button, Container, Drawer, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import ProductSidebar from '../components/ProductSidebar'

const Products = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            <Container sx={{ padding: '50px 0px' }}>
                <Typography gutterBottom variant='h4' sx={{ fontWeight: 'bolder', opacity: '.8' }}>Catalog</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }} sm={3.5}>
                        <ProductSidebar />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8.5}>
                        <Stack sx={{ display: { xs: 'flex', md: 'none' } }} direction={'row'} justifyContent={'flex-end'}>
                            <Button onClick={() => setIsDrawerOpen(true)} variant='contained' color='primary'>Filter</Button>
                        </Stack>
                        <ProductList />
                    </Grid>
                </Grid>
            </Container>

            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box sx={{ width: '60vw', padding: '10px' }}>
                    <ProductSidebar />
                </Box>
            </Drawer>
        </>
    )
}

export default Products