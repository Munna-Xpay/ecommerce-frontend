import { Box, Breadcrumbs, Button, Chip, Container, FormControl, Grid, InputLabel, MenuItem, Pagination, Rating, Select, Stack, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useEffect, useState } from 'react'
import ProductDesc from '../components/ProductDesc';
import WriteProductReview from '../components/WriteProductReview';
import ProductReviews from '../components/ProductReviews';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAllreviews } from '../redux/reviewSlice';
import { fetchAllProducts } from '../redux/productSlice';


const Product = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.allProducts.find(item => item._id == id))
    const productReviews = useSelector(state => state.reviewReducer.allReviews.filter(item => item.productId == id))
    console.log(productReviews)
    const [slideImg, setSlideImg] = useState(product.thumbnail)
    const [images, setImages] = useState([product?.thumbnail, ...product?.images])
    const [selectedColor, setSelecetdColor] = useState(product?.colors[0])
    const [selectedMemory, setselectedMemory] = useState(product?.memory[0])
    const [selectedQuantity, setselectedQuantity] = useState(1)
    console.log(selectedQuantity)

    const allImg = images.map((item, index) => {
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

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchAllreviews())
    }, [id])
    return (
        <>
            <Container sx={{ padding: '50px 0px' }}>
                <Breadcrumbs sx={{ marginBottom: '30px' }} separator={<Box sx={{ width: '5px', height: '5px', backgroundColor: 'gray', margin: '0px 7px', opacity: '.6', borderRadius: '50%' }} />} aria-label="breadcrumb">
                    <Typography variant='body2' sx={{ opacity: '.9' }} color="text.primary">Home</Typography>
                    <Typography variant='body2' sx={{ opacity: '.9' }} color="text.primary">{product?.category[0]}</Typography>
                    <Typography variant='body2' sx={{ opacity: '.7' }} color="text.primary">{product?.title}</Typography>
                </Breadcrumbs>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} >
                        <Box
                            component={'img'}
                            alt='product image'
                            src={slideImg}
                            sx={{ filter: 'blur(0)', borderRadius: '10px', width: '100%', height: '40em', objectFit: 'contain' }}
                        />
                        <Stack direction={'row'} m={3} justifyContent={'center'} spacing={2}>
                            {allImg}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Stack direction={'column'} spacing={5} alignItems={'flex-start'} sx={{ paddingLeft: { xs: '0px', md: '50px' } }}>
                            <Chip label={product?.inStock ? "In Stock" : "out of stock"} variant='filled' color={product?.inStock ? "success" : "error"} sx={{ fontWeight: 'bold' }} />
                            <Stack spacing={2}>
                                <Typography variant='h5' sx={{ opacity: '.8', fontWeight: '500' }}>{product?.title}</Typography>
                                <Stack direction={'row'}>
                                    <Rating readOnly value={productReviews?.map(rev => rev?.review_stars).length > 0 && Math.round(productReviews?.map(rev => rev?.review_stars).reduce((a, b) => a + b) / productReviews?.length)} />
                                    <Typography variant='subtitle2' sx={{ opacity: '.7' }}>({productReviews?.length} Reviews)</Typography>
                                </Stack>
                                <Typography variant='subtitle1' sx={{ opacity: '.8', fontWeight: '500' }}>${product?.discounted_price} - $<Typography component={'span'} sx={{ textDecoration: 'line-through' }}>{product?.original_price}</Typography> </Typography>
                                <Typography variant='body2' sx={{ opacity: '.8', lineHeight: '22px' }}>
                                    {product?.about}
                                </Typography>
                            </Stack>
                            <Stack spacing={2}>
                                <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>Color</Typography>
                                <Stack direction={'row'} spacing={3}>
                                    {
                                        product.colors.map((color, index) => (
                                            < Box onClick={() => setSelecetdColor(color)} width={35} height={35} sx={{ background: color, opacity: '.7', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: "1px solid gray" }}>{selectedColor == color && <DoneIcon sx={{ color: '#efefef' }} />}</Box>
                                        ))
                                    }
                                </Stack>
                            </Stack>
                            <Stack spacing={2}>
                                {product?.memory.length > 0 && <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>Memory</Typography>}
                                <Stack direction={'row'} spacing={3}>
                                    {
                                        product?.memory?.map((item, index) => (
                                            <Box onClick={() => setselectedMemory(item)} sx={{ border: selectedMemory == item ? '2px solid gray' : '2px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px', cursor: 'pointer' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>{item}</Typography></Box>
                                        ))
                                    }
                                </Stack>
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl sx={{ width: '100px' }}>
                                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={selectedQuantity}
                                            label="Quantity"
                                            onChange={(e) => setselectedQuantity(e.target.value)}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>2</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Button variant='contained' size='large' color='warning' startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
                                <Button variant='contained' size='large' startIcon={<FavoriteBorderIcon />}>Add To Wishlist</Button>
                            </Stack>
                            <Button variant='contained'>Buy Now</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <ProductDesc product={product} />
            </Container >
            <WriteProductReview productReviews={productReviews} />
            <Box mt={7}>
                {
                    productReviews.map((rev, index) => (
                        <ProductReviews review={rev} key={index} />
                    ))
                }
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '70px' }}>
                <Pagination sx={{ display: 'block', margin: 'auto' }} color='primary' count={10} />
            </Box>
        </>
    )
}

export default Product