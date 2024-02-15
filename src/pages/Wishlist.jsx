import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../components/ProductsTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Wishlist({ Wishlist }) {
  return (
    <Container sx={{ marginBottom: '70px', minHeight: '100vh',paddingTop:'50px' }}>
      <Box
        sx={{
          padding: "10px",

        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Wishlist
        </Typography>
      </Box>
      <ProductsTable isWishlist />
      <Box

        mt={3}
        sx={{
          display: "flex",
          justifyContent: {
            lg: "end",
            md: "center",
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px",
          }}
        >
          <Typography fontWeight={"bold"}>Subtotal</Typography>
          <Typography fontWeight={"bold"}>$567</Typography>
        </Box>
      </Box>

      <Stack alignItems={'end'}>
        <Button sx={{
          backgroundColor: '#01040a', '&:hover': { backgroundColor: '#01040a' }, width: {
            xs: 365,
            md: 200
          }
        }} variant="contained" size="large" color="warning">
          <AddShoppingCartIcon sx={{ marginRight: "10px" }} />
          Add To Cart
        </Button>
      </Stack>
      {!Wishlist &&
        <Button
          variant="text"
          size="large"
          sx={{ fontSize: "15px", color: "black", marginTop: "10px" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "14px", marginBottom: "2px" }} />
          Continue Shopping
        </Button>
      }
    </Container>
  );
}

export default Wishlist;
