import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {
    Autocomplete,
    Box,
    Button,
    Chip,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/productSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { countries } from '../CountryData';
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { fetchAllcoupons } from '../redux/couponSlice';
import { validateOrder } from '../validations/orderValidation';
import { addOrder } from '../redux/orderSlice';
import { BASE_URL } from '../redux/baseUrl';

const BuyNow = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [qtd, setQtd] = useState(1);
    const product = useSelector(state => state.productReducer.allProducts.filter(item => item._id == id))
    const orders = useSelector(state => state.orderReducer)
    const coupons = useSelector(state => state.couponReducer.allCoupon.filter((item) => item.price_limit < product[0].discounted_price * qtd))
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [selectedCoupon, setSelectedCoupon] = useState({});
    const [checkoutDetails, setCheckoutDetails] = useState({
        address: "",
        zipCode: null,
        city: "",
        country: "",
        shippingMethod: "Free",
    });
    const [shippingCharge, setShippingCharge] = useState(0);
    console.log(orders)

    useEffect(() => {
        if (checkoutDetails.shippingMethod == "Free") {
            setShippingCharge(0)
        } else if (checkoutDetails.shippingMethod == "Standard") {
            setShippingCharge(10)
        } else if (checkoutDetails.shippingMethod == "Express") {
            setShippingCharge(20)
        }
    }, [checkoutDetails.shippingMethod])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectCoupon = (item) => {
        setSelectedCoupon(item)
        handleClose()
    }

    const handleCheckout = () => {
        setErrors(validateOrder(checkoutDetails))
        const { address, zipCode, city, country } = checkoutDetails;
        if (address && zipCode && city && country) {
            const totalPrice = selectedCoupon.save_price ? (product[0]?.discounted_price * qtd) - selectedCoupon.save_price : (product[0]?.discounted_price * qtd)
            const products = [{ original_price: totalPrice, product: product[0], quantity: qtd }];
            console.log(totalPrice)
            dispatch(addOrder({ data: { ...checkoutDetails, totalPrice, products }, navigate }))
            setCheckoutDetails({
                address: "",
                zipCode: null,
                city: "",
                country: "",
                shippingMethod: "Free",
            })
            // navigate('/order/completed')
        }
    }

    useEffect(() => {
        dispatch(fetchAllProducts({}))
        dispatch(fetchAllcoupons())
    }, [])

    const showCartProducts = product.map((item) => {
        return (
            <Box>
                <Stack mt={3} direction={"row"}>
                    <Box>
                        <Box
                            component={'img'}
                            width={80}
                            height={80}
                            sx={{ objectFit: 'contain' }}
                            src={`${BASE_URL}/uploadedFiles/${item.thumbnail}`}
                            alt=""
                        />
                    </Box>
                    <Box>
                        <Typography mt={2}>{item.title}</Typography>
                        <Typography fontWeight={"bold"}>${item.discounted_price}</Typography>
                    </Box>
                </Stack>
                <Box textAlign={'center'}>
                    <FormControl sx={{ ms: 2, minWidth: 50 }} size="small">
                        <Select
                            value={qtd}
                            onChange={(e) => setQtd(e.target.value)}
                            sx={{ height: '33px' }}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        )
    })

    return (
        <Container sx={{ padding: { xs: 0 }, marginTop: '70px' }} >
            <Typography variant='h4' mb={7} fontWeight={'bold'}>Checkout</Typography>
            <Grid container >
                <Grid item xs={12} md={8.5} >
                    <Box>
                        <Box mt={5}>
                            <Typography variant="h6">
                                <span
                                    style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        padding: "1px 7px",
                                        borderRadius: "30px",
                                        marginRight: "5px",
                                    }}
                                >
                                    1
                                </span>
                                Shipping Details
                            </Typography>
                        </Box>
                        <Box mt={5}>

                            <TextField
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
                                sx={{ width: "396px" }}
                                label="Street Address"
                                variant="filled"
                                value={checkoutDetails.address}
                                onChange={(e) => setCheckoutDetails({ ...checkoutDetails, address: e.target.value })}
                                error={errors.address}
                                helperText={errors.address}
                            />
                            <TextField
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
                                sx={{
                                    width: "396px",
                                    marginTop: { md: 0, xs: 2 },
                                    marginLeft: { md: 1, xs: 0 },
                                }}
                                label="Zip Code"
                                variant="filled"
                                type='number'
                                value={checkoutDetails.zipCode}
                                onChange={(e) => setCheckoutDetails({ ...checkoutDetails, zipCode: e.target.value })}
                                error={errors.zipCode}
                                helperText={errors.zipCode}
                            />
                            <Stack direction={'row'} sx={{
                                display: {
                                    xs: 'block',
                                    md: 'flex'

                                }
                            }}  >

                                <TextField
                                    InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
                                    sx={{ width: '396px', marginTop: '20px' }}
                                    label="City" type='text'
                                    value={checkoutDetails.city}
                                    onChange={(e) => setCheckoutDetails({ ...checkoutDetails, city: e.target.value })}
                                    error={errors.city}
                                    helperText={errors.city}
                                    variant="filled" />

                                <Autocomplete
                                    style={{ borderRadius: '7px' }}
                                    id="country-select-demo"
                                    sx={{ width: '396px', backgroundColor: '#f2f4f5', marginLeft: { md: 1, xs: 0 }, marginTop: '20px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    options={countries}
                                    autoHighlight
                                    onInputChange={(e, value) => setCheckoutDetails({ ...checkoutDetails, country: value })}
                                    getOptionLabel={(option) => option.label}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            <img
                                                loading="lazy"
                                                width="20"
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                alt=""
                                            />
                                            {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            error={errors.country}
                                            value={checkoutDetails.country}
                                            {...params}
                                            label="Choose a country"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    )}
                                />
                            </Stack>

                            <Box mt={5}>
                                <Typography variant="h6">
                                    <span
                                        style={{
                                            backgroundColor: "red",
                                            color: "white",
                                            padding: "1px 7px",
                                            borderRadius: "30px",
                                            marginRight: "5px",
                                        }}
                                    >
                                        2
                                    </span>
                                    Shipping Method
                                </Typography>
                            </Box>
                        </Box>
                        <Grid container mt={4}>
                            <FormControl>
                                <RadioGroup value={checkoutDetails.shippingMethod} onChange={(e) => setCheckoutDetails({ ...checkoutDetails, shippingMethod: e.target.value })}>
                                    <Grid item md={6} sx={{
                                        marginTop: {
                                            xs: 2,
                                            md: 0
                                        }
                                    }}>
                                        <Box sx={{
                                            width: {
                                                xs: 360,
                                                md: 300
                                            }
                                        }} border={1} borderRadius={3} padding={2}>

                                            <Stack direction={"row"} spacing={2}>
                                                <FormControlLabel value="Free" control={<Radio />} />
                                                <PedalBikeIcon />
                                                <Box
                                                    width={250}
                                                    display={"flex"}
                                                    justifyContent={"space-between"}
                                                >
                                                    <Typography justifyContent={"space-between"}>Free</Typography>
                                                    <Typography>$0</Typography>
                                                </Box>
                                                <br />
                                            </Stack>
                                            <Typography fontSize={14} sx={{ marginLeft: "55px" }}>
                                                5-7 day delivery
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={6} sx={{
                                        marginTop: {
                                            xs: 2,
                                            md: 0
                                        }
                                    }}>
                                        <Box sx={{
                                            width: {
                                                xs: 360,
                                                md: 300
                                            }
                                        }} border={1} borderRadius={3} padding={2} >

                                            <Stack direction={"row"} spacing={2}>
                                                <FormControlLabel value="Standard" control={<Radio />} />
                                                <LocalShippingIcon />
                                                <Box
                                                    width={250}
                                                    display={"flex"}
                                                    justifyContent={"space-between"}
                                                >
                                                    <Typography justifyContent={"space-between"}>Standard</Typography>
                                                    <Typography>$10</Typography>
                                                </Box>
                                                <br />
                                            </Stack>
                                            <Typography fontSize={14} sx={{ marginLeft: "55px" }}>
                                                3-5 day delivery
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item md={6} sx={{
                                        marginLeft: {
                                            md: 15,
                                            xs: 0
                                        }, marginTop: {
                                            xs: 2,
                                            md: 0
                                        }, marginBottom: {
                                            xs: 3,
                                            md: 0
                                        }
                                    }}>
                                        <Box sx={{
                                            width: {
                                                xs: 360,
                                                md: 300
                                            }
                                        }} border={1} borderRadius={3} padding={2} >

                                            <Stack direction={"row"} spacing={2}>
                                                <FormControlLabel value="Express" control={<Radio />} />
                                                <RocketLaunchIcon />
                                                <Box
                                                    width={250}
                                                    display={"flex"}
                                                    justifyContent={"space-between"}
                                                >
                                                    <Typography justifyContent={"space-between"}>Express</Typography>
                                                    <Typography>$20</Typography>
                                                </Box>
                                                <br />
                                            </Stack>
                                            <Typography fontSize={14} sx={{ marginLeft: "55px" }}>
                                                2-3 day delivery
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Stack mb={6} mr={3} justifyContent={'flex-start'} direction={'row'}>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3.5}>
                    <Box mt={4}>
                        <Typography fontWeight={"bold"} sx={{ textAlign: 'center' }}>Order Summary</Typography>
                        {showCartProducts}
                        <Divider sx={{ padding: "10px" }} variant="middle" />
                        <Stack padding={2}>
                            <Typography component={"h6"} fontWeight={"bold"}>
                                Summary
                            </Typography>

                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15}>Subtotal</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    ₹ {product[0]?.original_price * qtd}
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15}>Shipping</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    ₹ {shippingCharge}
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15}>Discount</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    -₹ {(product[0]?.original_price - product[0]?.discounted_price) * qtd}
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15}>Tax</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    {product[0]?.tax}%
                                </Typography>
                            </Box>

                            <Button onClick={handleClickOpen}>Apply Coupon</Button>
                            {selectedCoupon.title && <Box><Chip label={selectedCoupon.title} onDelete={() => setSelectedCoupon({})} /></Box>}
                            <Divider sx={{ padding: "10px" }} variant="middle" />
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15} fontWeight={'bold'}>Total</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    ₹ {selectedCoupon.save_price ? (product[0]?.discounted_price * qtd) - selectedCoupon.save_price + shippingCharge : (product[0]?.discounted_price * qtd) + shippingCharge}
                                </Typography>
                            </Box>
                            <Button onClick={handleCheckout}
                                sx={{ marginTop: '15px', backgroundColor: '#03111c', color: 'white', '&:hover': { backgroundColor: '#03111c' }, width: '100%' }}
                            >
                                Order Now
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ bgcolor: '#F4F6F8' }}
            >
                <DialogTitle id="alert-dialog-title">
                    Available Coupons
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{ width: { xs: "100%", md: '300px' } }}>
                        {
                            coupons.length > 0 ? coupons.map((item, index) => (
                                <Stack onClick={() => handleSelectCoupon(item)} p={3} sx={{ bgcolor: '#f2f2f2', borderRadius: '10px' }}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                    <Typography variant='body1' >{item.description}</Typography>
                                    <Typography variant='body1' >Expires On : {new Date(item.expiresOn).toLocaleDateString()}</Typography>
                                    <Typography variant='body1' >Save : ₹ {item.save_price}</Typography>
                                </Stack>
                            ))
                                :
                                <Typography>There is no coupons available</Typography>
                        }
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

            <Toaster position="top-center"
                reverseOrder={false}
                containerStyle={{
                    padding: '10px',
                    fontSize: '17px',
                    fontFamily: 'sans-serif',


                }}
            />
        </Container >
    )
}

export default BuyNow