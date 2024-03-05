import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProductsTable from "../components/ProductsTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';


function Cart() {

  const cartitems = useSelector(state => state.cartReducer.cartItems)
  console.log(cartitems)
  return (
    <Container sx={{ minHeight: '100vh', marginBottom: '50px' }}>
      <Box
        sx={{
          padding: "17px",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Shopping Cart
        </Typography>
      </Box>
      {
        cartitems.length > 0 ?
          <Box sx={{ padding: "10px" }}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <ProductsTable products={cartitems} />
              </Grid>
              <Grid
                item
                border={1}
                borderRadius={2}
                borderColor={"gray"}
                xs={12}
                sm={3}
                padding={2}
                ml={2}
                sx={{
                  marginTop: {
                    xs: 10,
                    sm: 0,
                  },
                }}
              >
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
                      ₹{cartitems.map((item) => item.product.original_price).length > 0 && cartitems.map((item) => item.product.original_price * item.quantity)?.reduce((a, b) => a + b)}
                    </Typography>
                  </Box>
                  <Box
                    mt={2}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography fontSize={15}>Discount</Typography>
                    <Typography fontSize={15} fontWeight={"bold"}>
                      - ₹ {cartitems.map((item) => item.product.original_price).length > 0 && (cartitems.map((item) => item.product.original_price * item.quantity)?.reduce((a, b) => a + b)) - (cartitems.map((item) => item.original_price)?.reduce((a, b) => a + b))}
                    </Typography>
                  </Box>
                  <Box
                    mt={2}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography fontSize={15}>Tax</Typography>
                    <Typography fontSize={15} fontWeight={"bold"}>
                      {cartitems.map((item) => item.product.tax).length > 0 && cartitems.map((item) => item.product.tax)?.reduce((a, b) => a + b)}%
                    </Typography>
                  </Box>

                  <Divider sx={{ padding: "10px" }} variant="middle" />
                  <Box
                    mt={2}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography fontSize={15}>Total</Typography>
                    <Typography fontSize={15} fontWeight={"bold"}>
                      ₹{cartitems.map((item) => item.original_price).length > 0 && cartitems.map((item) => item.original_price)?.reduce((a, b) => a + b)}
                    </Typography>
                  </Box>
                  <Link to={'/checkout'} style={{ width: '100%' }}><Button
                    sx={{ marginTop: "15px", width: '100%' }}
                    variant="contained"
                    color="success"
                  >
                    Checkout
                  </Button></Link>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          :
          <Stack>
            <Box
              component={'img'}
              alt="cart empty"
              src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png"
              sx={{ width: { xs: '70%', md: '30%' }, display: 'block', margin: 'auto', objectFit: 'contain' }}
            />
            <Typography variant="h6" sx={{ textAlign: 'center' }} mb={3} color={'error'}>Your Cart Is Empty !</Typography>
          </Stack>
      }
      <Link to={'/products'}><Button
        variant="text"
        size="large"
        sx={{ fontSize: "15px", color: "black" }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "14px", marginBottom: "2px" }} />{" "}
        Continue Shopping
      </Button></Link>

      <Toaster position="top-center"
        reverseOrder={false}
        containerStyle={{
          padding: '10px',
          fontSize: '17px',
          fontFamily: 'sans-serif',
        }}
      />
    </Container>
  );
}

export default Cart;
