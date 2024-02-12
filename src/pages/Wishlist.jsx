import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../components/ProductsTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Wishlist() {
  return (
    <Container>
      <Box
        sx={{
          padding: "17px",
          marginTop: "50px",
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
      <Box
        sx={{
          width: {
            lg: 200,
            md: 100,
          },
          marginLeft: {
            lg: 119,
            md: 0,
          },
        }}
        mt={2}
      >
        <Button fullWidth variant="contained" size="large" color="warning">
          <AddShoppingCartIcon sx={{ marginRight: "10px" }} />
          Add To Cart
        </Button>
      </Box>
      <Button
        variant="text"
        size="large"
        sx={{ fontSize: "15px", color: "black", marginTop: "10px" }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "14px", marginBottom: "2px" }} />
        Continue Shopping
      </Button>
    </Container>
  );
}

export default Wishlist;
