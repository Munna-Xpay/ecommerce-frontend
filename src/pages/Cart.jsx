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

function Cart() {
  return (
    <Container>
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
      <Box sx={{ padding: "10px" }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <ProductsTable />
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
                  $390
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
                <Typography fontSize={15}>Discount(15%)</Typography>
                <Typography fontSize={15} fontWeight={"bold"}>
                  -$10
                </Typography>
              </Box>
              <Box
                mt={2}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography fontSize={15}>Tax</Typography>
                <Typography fontSize={15} fontWeight={"bold"}>
                  7%
                </Typography>
              </Box>

              <TextField
                sx={{ marginTop: "10px", backgroundColor: "#f0f3f7" }}
                placeholder="Discount Code"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="text"
                        sx={{ color: "gray" }}
                        size="small"
                      >
                        Apply
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />

              <Divider sx={{ padding: "10px" }} variant="middle" />
              <Box
                mt={2}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography fontSize={15}>Total</Typography>
                <Typography fontSize={15} fontWeight={"bold"}>
                  $425
                </Typography>
              </Box>
              <Button
                sx={{ marginTop: "15px" }}
                variant="contained"
                color="success"
              >
                Checkout
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="text"
        size="large"
        sx={{ fontSize: "15px", color: "black" }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "14px", marginBottom: "2px" }} />{" "}
        Continue Shopping
      </Button>
    </Container>
  );
}

export default Cart;
