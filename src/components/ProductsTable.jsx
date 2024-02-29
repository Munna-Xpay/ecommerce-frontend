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
import { deleteCartItem } from "../redux/cartSlice";

function ProductsTable({ isWishlist }) {


  const dispatch = useDispatch()
  const cartitems = useSelector(state => state.cartReducer.cartItems)


  const [qty, setQty] = useState('');

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleCartItemDelete = (id) => {
    dispatch(deleteCartItem(id))
  }

  const showCartItems = cartitems.map((item, index) => {
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

              <TableCell align="right">
                {!isWishlist &&
                  <>Quantity</>
                }
              </TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right">Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex" }}>
                  <img
                    height={70}
                    width={110}
                    src="https://i.postimg.cc/0jxshzJL/iphone-15-pro-gray.jpg"
                    alt=""
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      margin: "10px",
                    }}
                    component={"p"}
                  >
                    Iphone 14
                  </Typography>
                  <Typography display={"block"} component={"p"}></Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                {!isWishlist &&
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
                }
              </TableCell>
              <TableCell align="right">$575</TableCell>
              <TableCell align="right">
                <DeleteIcon sx={{ color: 'red' }} />
                {
                  isWishlist && <AddShoppingCartIcon sx={{ marginLeft: '6px' }} />
                }
              </TableCell>
            </TableRow>
            {showCartItems}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductsTable;
