import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../components/ProductsTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";

function Wishlist({ Wishlist }) {
  const wishlistitems=useSelector(state=>state.wishlistReducer.wishlistProducts)
 console.log(wishlistitems);
  return (
    <Container sx={{ marginBottom: '70px', minHeight: '100vh', paddingTop: '50px' }}>
      <Box
        sx={{
          padding: "10px",

        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Wishlist
        </Typography>
      </Box>
      <ProductsTable products={wishlistitems} isWishlist />
      
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
