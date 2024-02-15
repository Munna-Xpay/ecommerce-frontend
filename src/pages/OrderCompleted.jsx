import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

function OrderCompleted() {
  return (
    <Stack spacing={3} mt={5} justifyContent={'center'} alignItems={'center'}>
      <Box  mt={10}>
        <img
          width={300}
          height={300}
          src="https://i.postimg.cc/9XKj3SSw/order-completed-icon-176856.png"
          alt=""
        />
      </Box>
        <Typography fontSize={30} fontWeight={"bold"}>
          Your order is completed!
        </Typography>
        <Typography color={"gray"} fontSize={15}>
          You will be receiving a confirmation email with order details
        </Typography>
      <Box mt={5} >
        <Link to={'/products'}><Button
          sx={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#03111c",
            "&:hover": { backgroundColor: "#03111c" },
          }}
          disableElevation
          variant="contained"
        >
          <ArrowBackIos /> Continue Shopping
        </Button></Link>
      </Box>
    </Stack>
  );
}

export default OrderCompleted;
