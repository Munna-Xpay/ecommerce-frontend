import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../components/ProductsTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Wishlist({ Wishlist }) {
  const wishlistitems = useSelector(state => state.wishlistReducer.wishlistProducts)
  // console.log(wishlistitems);
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
      {wishlistitems.length > 0 ? (
        <ProductsTable products={wishlistitems} isWishlist />
      ) : (
        <Box textAlign={'center'}>
        <img width={350} height={300} src="https://i.postimg.cc/L4LTnB6y/toppng-com-your-wishlist-is-empty-lets-fill-it-iphone-1708x1478.png" alt="" />
          <Typography fontWeight={'bold'} fontSize={25}>Your wishlist is empty.</Typography>
        </Box>
      )}
      {!Wishlist &&
       <Link to={'/'} style={{textDecoration:'none'}}> <Button
          variant="text"
          size="large"
          sx={{ fontSize: "15px", color: "black", marginTop: "10px" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "14px", marginBottom: "2px" }} />
          Continue Shopping
        </Button>
        </Link>
      }
    </Container>
  );
}

export default Wishlist;
