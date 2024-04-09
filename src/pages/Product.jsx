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
import { addToCart } from '../redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { addToWishlist } from '../redux/wishlistSlice';
import { BASE_URL } from '../redux/baseUrl';


const Product = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.allProducts.find(item => item._id == id))
    const cart = useSelector(state => state.cartReducer)
    const user = useSelector(state => state.userReducer.user)
    const productReviews = useSelector(state => state.reviewReducer.allReviews?.filter(item => item.productId == id))
    const [slideImg, setSlideImg] = useState(product?.thumbnail)
    // const [images, setImages] = useState([product?.thumbnail, ...product?.images])
    const [selectedColor, setSelecetdColor] = useState('')
    const [selectedMemory, setselectedMemory] = useState('')
    // const [selectedQuantity, setselectedQuantity] = useState(1)

    const allImg = product?.images?.map((item, index) => {
        return (
            <Box
                onClick={(e) => setSlideImg(item)}
                component={'img'}
                alt='product image'
                src={`${BASE_URL}/uploadedFiles/${item}`}
                sx={{ width: '70px', height: '70px', objectFit: 'contain', borderRadius: '8px', border: `3px solid ${item == slideImg ? 'orange' : 'white'}`, cursor: 'pointer' }}
            />
        )
    })

    useEffect(() => {
        dispatch(fetchAllProducts({}))
        dispatch(fetchAllreviews())
    }, [])

    useEffect(() => {
        setSlideImg(product?.thumbnail)
    }, [product])

    //add to cart
    const handleAddToCart = () => {
        dispatch(addToCart({ product: id, original_price: product.discounted_price }))
    }

    //add to wishlist
    const handleAddToWishlist = () => {
        dispatch(addToWishlist({ product: id, original_price: product.discounted_price }))
    }

    return (
        <>
            <Container sx={{ padding: '50px 0px' }}>
                <Breadcrumbs sx={{ marginBottom: '30px' }} separator={<Box sx={{ width: '5px', height: '5px', backgroundColor: 'gray', margin: '0px 7px', opacity: '.6', borderRadius: '50%' }} />} aria-label="breadcrumb">
                    <Typography variant='body2' sx={{ opacity: '.9' }} color="text.primary">Home</Typography>
                    <Typography variant='body2' sx={{ opacity: '.9' }} color="text.primary">{product?.category}</Typography>
                    <Typography variant='body2' sx={{ opacity: '.7' }} color="text.primary">{product?.title}</Typography>
                </Breadcrumbs>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} >
                        <Box
                            component={'img'}
                            alt='product image'
                            src={`${BASE_URL}/uploadedFiles/${slideImg}`}
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
                                    <Rating readOnly value={product?.review_star} />
                                    <Typography variant='subtitle2' sx={{ opacity: '.7' }}>({productReviews?.length} Reviews)</Typography>
                                </Stack>
                                <Typography variant='subtitle1' sx={{ opacity: '.8', fontWeight: '500' }}>₹{product?.discounted_price} - ₹<Typography component={'span'} sx={{ textDecoration: 'line-through' }}>{product?.original_price}</Typography> </Typography>
                                <Typography variant='body2' sx={{ opacity: '.8', lineHeight: '22px' }}>
                                    {product?.about}
                                </Typography>
                            </Stack>
                        
                            <Stack spacing={2}>
                                {
                                    product?.features?.map((item) => (
                                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>{item.key}</Typography>
                                            {
                                            item.value.split(',').map((i) => (
                                               item.key==='Colour'? < Box onClick={() => setSelecetdColor(i)}  width={35} height={35} sx={{ background: i, opacity: '.7', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: "1px solid gray" }}>{selectedColor == i && <DoneIcon sx={{ color: '#efefef' }} />}</Box>
                                            :  <Box onClick={() => setselectedMemory(i)} sx={{ border: selectedMemory == i ? '2px solid gray' : '2px solid #dfdfdf', borderRadius: '6px', padding: '10px 15px', cursor: 'pointer' }}><Typography variant='body2' sx={{ fontWeight: '500' }}>{i}</Typography></Box>

                                             ))
                                            }
                                        </Stack>
                                    ))
                                }
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Button variant='contained' onClick={handleAddToCart} size='large' color='warning' startIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
                                <Button variant='contained' onClick={handleAddToWishlist} size='large' startIcon={<FavoriteBorderIcon />}>Add To Wishlist</Button>
                            </Stack>
                            {user && <Link to={'/buynow/' + id}><Button variant='contained'>Buy Now</Button></Link>}
                        </Stack>
                    </Grid>
                </Grid>
                <ProductDesc product={product} />
            </Container >
            <WriteProductReview productId={id} productReviews={productReviews} />
            <Box mt={7}>
                {
                    productReviews.map((rev, index) => (
                        <ProductReviews review={rev} key={index} />
                    ))
                }
            </Box>

            <Toaster position="top-center"
                reverseOrder={false}
                containerStyle={{
                    padding: '10px',
                    fontSize: '17px',
                    fontFamily: 'sans-serif',
                }}
            />
        </>
    )
}

export default Product