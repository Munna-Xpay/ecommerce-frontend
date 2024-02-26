import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, InputAdornment, Paper, Rating, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BestSellerCard from './BestSellerCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategory } from '../redux/categorySlice';
import { fetchAllProducts } from '../redux/productSlice';
const ProductSidebar = () => {

    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categoryReducer.allCategories);
    const [category, setCategory] = useState("")
    const [review, setReview] = useState(null)
    const [price, setPrice] = useState({
        min: null,
        max: null
    })

    console.log(price)

    useEffect(() => {
        dispatch(fetchAllCategory())
    }, [])

    useEffect(() => {
        dispatch(fetchAllProducts({ category }))
    }, [category])

    useEffect(() => {
        if (price.min && price.max) {
            dispatch(fetchAllProducts(price))
        }
    }, [price])

    useEffect(() => {
        dispatch(fetchAllProducts({ review }))
    }, [review])

    return (
        <>
            <Stack sx={{ padding: '30px 0px' }}>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            allCategories.map((item, index) => (
                                <Stack onClick={() => setCategory(item.category)} direction={'row'} mb={1} spacing={1} alignItems={'center'} sx={{ cursor: 'pointer' }}>
                                    <ChevronRightIcon sx={{ opacity: '.8' }} fontSize='small' />
                                    <Typography variant='body2' sx={{ opacity: category == item.category ? '.99' : '.7' }}>{item.category}</Typography>
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
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Brand</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Apple" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Xiaomi" />
                            <FormControlLabel control={<Checkbox />} label="Honor" />
                            <FormControlLabel control={<Checkbox />} label="Samsumg" />
                        </FormGroup>
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
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Fast" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Saving" />
                            <FormControlLabel control={<Checkbox />} label="Free" />
                        </FormGroup>
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
                            <FormControlLabel control={<Switch defaultChecked />} />
                        </FormGroup>
                    </Stack>
                </Paper>

                <Paper sx={{ padding: '12px', marginTop: '20px' }}>
                    <Typography gutterBottom variant='subtitle1' sx={{ fontWeight: 'bold', opacity: '.8', marginBottom: '10px' }}>Best Sellers</Typography>
                    <Stack spacing={3} >
                        <BestSellerCard />
                        <BestSellerCard />
                        <BestSellerCard />
                    </Stack>
                </Paper>

            </Stack>
        </>
    )
}

export default ProductSidebar