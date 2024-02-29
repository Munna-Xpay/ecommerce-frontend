import React, { useEffect } from 'react'
import {
    Autocomplete,
    Box,
    Button,
    Container,
    Dialog,
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
import { Link, useParams } from 'react-router-dom';
import { countries } from '../CountryData';
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { fetchAllcoupons } from '../redux/couponSlice';

const BuyNow = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.allProducts.filter(item => item._id == id))
    const coupons = useSelector(state => state.couponReducer.allCoupon.filter((item) => item.price_limit < product[0].discounted_price))
    const [open, setOpen] = React.useState(false);
    console.log(coupons)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                            src={item.thumbnail}
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
                            defaultValue={1}
                            // onChange={handleChange}
                            sx={{ height: '33px' }}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem selected={true} value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
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
                            />
                            <Stack direction={'row'} sx={{
                                display: {
                                    xs: 'block',
                                    md: 'flex'

                                }
                            }}  >

                                <TextField InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginTop: '20px' }} label="City" type='text' variant="filled" />

                                <Autocomplete
                                    style={{ borderRadius: '7px' }}
                                    id="country-select-demo"
                                    sx={{ width: '396px', backgroundColor: '#f2f4f5', marginLeft: { md: 1, xs: 0 }, marginTop: '20px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    options={countries}
                                    autoHighlight
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
                                <RadioGroup defaultValue="free">
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
                                                <FormControlLabel value="free" control={<Radio />} />
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
                                                <FormControlLabel value="standard" control={<Radio />} />
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
                    {/* <Stack border={1} borderRadius={3} p={4}><OrderSummary products={product} buyNow /></Stack> */}
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
                                    ${product[0]?.original_price}
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15}>Shipping</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    $30
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15}>Discount</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    -${product[0]?.original_price - product[0]?.discounted_price}
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

                            <Divider sx={{ padding: "10px" }} variant="middle" />
                            <Box
                                mt={2}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Typography fontSize={15} fontWeight={'bold'}>Total</Typography>
                                <Typography fontSize={15} fontWeight={"bold"}>
                                    ${product[0]?.discounted_price}
                                </Typography>
                            </Box>
                            <Link style={{ width: '100%' }} to={'/order/completed'}><Button
                                sx={{ marginTop: '15px', backgroundColor: '#03111c', color: 'white', '&:hover': { backgroundColor: '#03111c' }, width: '100%' }}
                            >
                                Order Now
                            </Button></Link>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default BuyNow