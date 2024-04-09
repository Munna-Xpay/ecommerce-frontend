import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputAdornment, Paper, Radio, RadioGroup, Rating, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BestSellerCard from './BestSellerCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategory } from '../redux/categorySlice';
import { fetchAllProducts } from '../redux/productSlice';
const ProductSidebar = ({ currentCategory }) => {

    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categoryReducer.allCategories);
    const brands = useSelector(state => state.productReducer.brands);
    const popularProducts = useSelector(state => state.productReducer.allProducts.map(item => item).sort((a, b) => b.review_star - a.review_star))
    const [category, setCategory] = useState("")
    const [review, setReview] = useState(0)
    const [price, setPrice] = useState({
        min: "",
        max: ""
    })
    const [shipping, setShipping] = useState("")
    const [brand, setBrand] = useState("")
    const [inStock, setInStock] = useState(true)

    console.log(brands)

    useEffect(() => {
        dispatch(fetchAllProducts({ category }))
    }, [category])

    useEffect(() => {
        if (price.min && price.max) {
            currentCategory ? dispatch(fetchAllProducts({ ...price, category: currentCategory })) : dispatch(fetchAllProducts(price))
        }
    }, [price])

    useEffect(() => {
        currentCategory ? dispatch(fetchAllProducts({ review, category: currentCategory })) : dispatch(fetchAllProducts({ review }))
    }, [review])

    useEffect(() => {
        currentCategory ? dispatch(fetchAllProducts({ shipping, category: currentCategory })) : dispatch(fetchAllProducts({ shipping }))
    }, [shipping])

    useEffect(() => {
        currentCategory ? dispatch(fetchAllProducts({ brand, category: currentCategory })) : dispatch(fetchAllProducts({ brand }))
    }, [brand])

    useEffect(() => {
        const inStockSrting = inStock ? 'true' : 'false'
        currentCategory ? dispatch(fetchAllProducts({ inStockSrting, category: currentCategory })) : dispatch(fetchAllProducts({ inStockSrting }))
    }, [inStock])

    const showPopularProducts = popularProducts.map((product, index) => {
        if (index < 3) {
            return (
                <BestSellerCard product={product} />
            )
        }
    })

    const handleDefault = () => {
        dispatch(fetchAllProducts({}))
        setCategory("")
    }

    return (
        <>
            <Stack sx={{ padding: '30px 0px' }}>
                {!currentCategory && <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack onClick={handleDefault} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                            <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                            <Typography variant='body2' sx={{ opacity: category == "" ? '.99' : '.7' }}>Default</Typography>
                        </Stack>
                        {
                            allCategories.map((item, index) => (
                                <Stack onClick={() => setCategory(item._id)} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                                    <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                                    <Typography variant='body2' sx={{ opacity: category == item._id ? '.99' : '.7' }}>{item._id}</Typography>
                                </Stack>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>}

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Brand</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            brands.map((item, index) => (
                                <Stack onClick={() => setBrand(item._id)} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                                    <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                                    <Typography variant='body2' sx={{ opacity: brand == item._id ? '.99' : '.7' }}>{item._id}</Typography>
                                </Stack>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction={'row'} spacing={3}>
                            <TextField
                                size='small'
                                type='number'
                                label="Min"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                }}
                                value={price.min}
                                onChange={(e) => setPrice({ ...price, min: e.target.value })}
                            />
                            <Typography variant='h6'>-</Typography>
                            <TextField
                                size='small'
                                type='number'
                                label="Max"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                }}
                                value={price.max}
                                onChange={(e) => setPrice({ ...price, max: e.target.value })}
                            />
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Shipping</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack onClick={() => setShipping("Fast")} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                            <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                            <Typography variant='body2' sx={{ opacity: shipping == "Fast" ? '.99' : '.7' }}>Fast</Typography>
                        </Stack>
                        <Stack onClick={() => setShipping("Free")} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                            <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                            <Typography variant='body2' sx={{ opacity: shipping == "Free" ? '.99' : '.7' }}>Free</Typography>
                        </Stack>
                        <Stack onClick={() => setShipping("Saving")} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                            <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                            <Typography variant='body2' sx={{ opacity: shipping == "Saving" ? '.99' : '.7' }}>Saving</Typography>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Rating</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            <Stack onClick={() => setReview(2)} sx={{ cursor: 'pointer' }} direction={'row'} spacing={1}>
                                <Rating value={2} readOnly />
                                <Typography variant='body2' sx={{ opacity: '.8' }}> & Up</Typography>
                            </Stack>
                            <Stack onClick={() => setReview(3)} sx={{ cursor: 'pointer' }} direction={'row'} spacing={1}>
                                <Rating value={3} readOnly />
                                <Typography variant='body2' sx={{ opacity: '.8' }}> & Up</Typography>
                            </Stack>
                            <Stack onClick={() => setReview(4)} sx={{ cursor: 'pointer' }} direction={'row'} spacing={1}>
                                <Rating value={4} readOnly />
                                <Typography variant='body2' sx={{ opacity: '.8' }}> & Up</Typography>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Paper sx={{ padding: '12px' }}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2} >
                        <Typography variant='subtitle1' sx={{ opacity: '.8', fontWeight: 'bold' }}>Only In Stock</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={inStock} onChange={(e) => setInStock(e.target.checked)} />} />
                        </FormGroup>
                    </Stack>
                </Paper>

                <Paper sx={{ padding: '12px', marginTop: '20px' }}>
                    <Typography gutterBottom variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', marginBottom: '10px' }}>Best Sellers</Typography>
                    <Stack spacing={3} >
                        {showPopularProducts}
                    </Stack>
                </Paper>
            </Stack >
        </>
    )
}

export default ProductSidebar