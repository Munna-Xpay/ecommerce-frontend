import React from 'react'
import {
    Box,
    Button,
    Container,
    Grid,
   
    Stack,
   
    Typography,
  } from "@mui/material";
import CheckoutDetails from '../components/CheckoutDetails';
import OrderSummary from '../components/OrderSummary';
 

function Checkout() {

  return (
    <Container  sx={{padding:{xs:0},marginTop:'70px'}} >
        <Typography variant='h4' mb={7}  fontWeight={'bold'}>Checkout</Typography>
    <Grid container >
                    <Grid item xs={12} md={8.5} >
                       <CheckoutDetails/>
                    </Grid>
                    <Grid item xs={12} md={3.5}>
                   <Stack border={1} borderRadius={3} p={4}><OrderSummary/></Stack>
                    </Grid>
                </Grid>
    </Container>
  )
}

export default Checkout