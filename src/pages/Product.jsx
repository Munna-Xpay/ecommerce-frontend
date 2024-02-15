import { Box, Breadcrumbs, Button, Chip, Container, FormControl, Grid, InputLabel, MenuItem, Pagination, Rating, Select, Stack, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState } from 'react'
import ProductDesc from '../components/ProductDesc';
import WriteProductReview from '../components/WriteProductReview';
import ProductReviews from '../components/ProductReviews';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Product = () => {
    const [slideImg, setSlideImg] = useState('https://zone-ui.vercel.app/assets/images/z_product/product_2.png')

    const proImages = [
        'https://zone-ui.vercel.app/assets/images/z_product/product_2.png',
        'https://zone-ui.vercel.app/assets/images/z_product/product_5.png',
        'https://zone-ui.vercel.app/assets/images/z_product/product_7.png',
        'https://zone-ui.vercel.app/assets/images/z_product/product_8.png',
        'https://zone-ui.vercel.app/assets/images/z_product/product_9.png'
    ]

    const allImg = proImages.map((item, index) => {
        return (
            <Box
                onClick={(e) => setSlideImg(item)}
                component={'img'}
                alt='product image'
                src={item}
                sx={{ width: '70px', height: '70px', objectFit: 'contain', borderRadius: '8px', border: `3px solid ${item == slideImg ? 'orange' : 'white'}`, cursor: 'pointer' }}
            />
        )
    })
    return (
        <>
            <Container sx={{ padding: '50px 0px' }}>
                <Breadcrumbs sx={{ marginBottom: '30px' }} separator={<Box sx={{ width: '5px', height: '5px', backgroundColor: 'gray', margin: '0px 7px', opacity: '.6', borderRadius: '50%' }} />} aria-label="breadcrumb">
                    <Typography variant='body2' sx={{ opacity: '.9' }} color="text.primary">Home</Typography>
                    <Typography variant='body2' sx={{ opacity: '.9' }} color="text.primary">Mobile</Typography>
                    <Typography variant='body2' sx={{ opacity: '.7' }} color="text.primary">Apple iPhone</Typography>
                </Breadcrumbs>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={7} >
                        <Box
                            component={'img'}
                            alt='product image'
                            src={slideImg}
                            sx={{ background: '#efefef', filter: 'blur(0)', borderRadius: '10px', width: '100%', height: '40em', objectFit: 'contain' }}
                        />
                        <Stack direction={'row'} m={3} justifyContent={'center'} spacing={2}>
                            {allImg}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Stack direction={'column'} spacing={5} alignItems={'flex-start'} sx={{ paddingLeft: { xs: '0px', md: '50px' } }}>
                            <Chip label="In Stock" variant='filled' color="success" sx={{ fontWeight: 'bold' }} />
                            <Stack spacing={2}>
                                <Typography variant='h5' sx={{ opacity: '.8', fontWeight: '500' }}>Apple iPhone</Typography>
                                <Stack direction={'row'}>
                                    <Rating />
                                    <Typography variant='subtitle2' sx={{ opacity: '.7' }}>(99 Reviews)</Typography>
                                </Stack>
                                <Typography variant='subtitle1' sx={{ opacity: '.8', fontWeight: '500' }}>$83.74 - $<Typography component={'span'} sx={{ textDecoration: 'line-through' }}>97.14</Typography> </Typography>
                                <Typography variant='body2' sx={{ opacity: '.8', lineHeight: '22px' }}>
                                    Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut
                                    facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusant
                                    ium doloribus eaque debitis.
                                </Typography>
                            </Stack>
                            <Stack spacing={2}>
                                <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>Color</Typography>
                                <Stack direction={'row'} spacing={3}>
                                    <Box width={35} height={35} sx={{ background: 'red', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><DoneIcon sx={{ color: '#efefef' }} /></Box>
                                    <Box width={35} height={35} sx={{ background: 'blue', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
                                    <Box width={35} height={35} sx={{ background: 'green', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
                                    <Box width={35} height={35} sx={{ background: 'gray', opacity: '.6', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box>
                                </Stack>
                            </Stack>
                            <Stack spacing={2}>
                                <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>Memory</Typography>
                                <Stack direction={'row'} spacing={3}>
                                    <Box sx={{ border: '1px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>32GB</Typography></Box>
                                    <Box sx={{ border: '2px solid gray', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>64GB</Typography></Box>
                                    <Box sx={{ border: '1px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>128GB</Typography></Box>
                                    <Box sx={{ border: '1px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>256GB</Typography></Box>
                                </Stack>
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={20}
                                            label="Quantity"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Button variant='contained' size='large' color='warning' startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
                                <Button variant='contained'>Buy Now</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <ProductDesc />
            </Container>
            <WriteProductReview />
            <Box mt={7}>
                <ProductReviews />
                <ProductReviews />
                <ProductReviews />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center',marginBottom:'70px' }}>
                <Pagination sx={{ display: 'block', margin: 'auto' }} color='primary' count={10} />
            </Box>
        </>
    )
}

export default Product