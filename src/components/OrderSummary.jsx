import { Box, Button, Divider, FormControl, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

function OrderSummary() {
  const [qty, setQty] = useState('');

  const handleChange = (event) => {
    setQty(event.target.value);
  };
  return (
    <Box mt={4}>
      <Typography fontWeight={"bold"}>Order Summary</Typography>
      <Box>
        <Stack mt={3} direction={"row"}>
          <Box>
            <img
              width={80}
              height={80}
              src="https://zone-ui.vercel.app/assets/images/z_product/product_1.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography mt={2}>Apple Phone</Typography>
            <Typography fontWeight={"bold"}>$77</Typography>
          </Box>
          <DeleteIcon sx={{ marginLeft: '35px', marginTop: '30px' }} />
        </Stack>
        <Box textAlign={'center'}>
          <FormControl sx={{ ms: 2, minWidth: 50 }} size="small">
            <Select
              defaultValue={1}
              onChange={handleChange}
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

      <Box>
        <Stack mt={3} direction={"row"}>
          <Box>
            <img
              width={80}
              height={80}
              src="https://zone-ui.vercel.app/assets/images/z_product/product_1.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography mt={2}>Apple Phone</Typography>
            <Typography fontWeight={"bold"}>$77</Typography>
          </Box>
          <DeleteIcon sx={{ marginLeft: '35px', marginTop: '30px' }} />
        </Stack>
        <Box textAlign={'center'}>
          <FormControl sx={{ ms: 2, minWidth: 50 }} size="small">
            <Select
              defaultValue={1}
              onChange={handleChange}
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
      <Box>
        <Stack mt={3} direction={"row"}>
          <Box>
            <img
              width={80}
              height={80}
              src="https://zone-ui.vercel.app/assets/images/z_product/product_1.png"
              alt=""
            />
          </Box>
          <Box>
            <Typography mt={2}>Apple Phone</Typography>
            <Typography fontWeight={"bold"}>$77</Typography>
          </Box>
          <DeleteIcon sx={{ marginLeft: '35px', marginTop: '30px' }} />
        </Stack>
        <Box textAlign={'center'}>
          <FormControl sx={{ ms: 2, minWidth: 50 }} size="small">
            <Select
              defaultValue={1}
              onChange={handleChange}
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
            disableUnderline: true,
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
          <Typography fontSize={15} fontWeight={'bold'}>Total</Typography>
          <Typography fontSize={15} fontWeight={"bold"}>
            $425
          </Typography>
        </Box>
        <Link style={{width:'100%'}} to={'/order/completed'}><Button
          sx={{ marginTop: '15px', backgroundColor: '#03111c', color: 'white', '&:hover': { backgroundColor: '#03111c' },width:'100%' }}
        >
          Order Now
        </Button></Link>
      </Stack>
    </Box>
  );
}

export default OrderSummary;
