import React, { useState } from "react";
import {
  Box,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableHead,
  Select,
  FormControl,
  MenuItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartItem } from "../redux/cartSlice";

function ProductsTable({ isWishlist, products }) {

  const dispatch = useDispatch()

  const handleCartItemDelete = (id) => {
    dispatch(deleteCartItem(id))
  }

  const showCartItems = products.map((item, index) => {
    return (
      <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Box sx={{ display: "flex" }}>
            <Box
              component={'img'}
              sx={{ objectFit: 'contain' }}
              height={70}
              width={110}
              src={item.product.thumbnail}
              alt={item.product.title}
            />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
              }}
              component={"p"}
            >
              {item.product.title}
            </Typography>
          </Box>
        </TableCell>
        <TableCell align="right">
          <FormControl sx={{ ms: 2, minWidth: 50 }} size="small">
            <Select
              defaultValue={1}
              onChange={(e) => dispatch(updateCartItem({ id: item._id, data: { quantity: e.target.value, original_price: item.product.original_price } }))}
              value={item.quantity}
              sx={{ height: '33px' }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="right">₹ {item.original_price}</TableCell>
        <TableCell align="right">
          <IconButton onClick={() => handleCartItemDelete(item._id)}><DeleteIcon /></IconButton>
          {
            isWishlist && <AddShoppingCartIcon sx={{ marginLeft: '6px' }} />
          }
        </TableCell>
      </TableRow>
    )
  })

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table res sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showCartItems}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductsTable;
