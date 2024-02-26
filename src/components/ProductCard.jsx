import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ isCardLike, product }) => {
    return (
        <Paper>
            <Stack spacing={isCardLike ? 1 : 3} direction={isCardLike ? 'column' : 'row'} sx={{ width: '99%', position: 'relative', padding: '10px' }}>
                <Box
                    component="img"
                    src={product?.thumbnail}
                    alt="green iguana"
                    sx={{ objectFit: 'contain', height: isCardLike ? '190px' : '160px', width: isCardLike ? '94%' : '190px', borderRadius: '12px' }}

                />
                <Box sx={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', opacity: { xs: '10', md: '0' }, '&:hover': { opacity: '10', transition: '.3s' } }}>
                    <Link to={'/product/' + product?._id}><IconButton sx={{ position: 'absolute', top: isCardLike ? '130px' : '130px', left: isCardLike ? '10px' : '110px', backgroundColor: 'rgb(250, 84, 28)', color: '#efefef', boxShadow: 'rgba(250, 84, 28, 0.24) 0px 8px 16px 0px', '&:hover': { backgroundColor: 'rgb(150, 10, 28)', color: '#efefef' } }}>
                        <AddShoppingCartIcon />
                    </IconButton></Link>
                </Box>
                <Stack spacing={1} gap={isCardLike ? '0' : '5px'} >
                    {/* <Typography variant="body2" gutterBottom sx={{ opacity: '.6', fontWeight: '500' }}>{product?.category[1]}</Typography> */}
                    <Typography variant="body2" gutterBottom sx={{ opacity: '.8', fontWeight: '500' }}>{product?.title}</Typography>
                    {!isCardLike && <Typography variant="body2" gutterBottom sx={{ opacity: '.5', fontWeight: '500' }}>
                        {product?.about.slice(0, 70)}...
                    </Typography>}
                    <Typography variant="body2" gutterBottom sx={{ opacity: '.8', fontWeight: '500' }}>₹ {product?.discounted_price} <Typography variant="body2" component={'span'} sx={{ textDecoration: 'line-through', opacity: '.6' }}>${product.original_price}</Typography></Typography>
                    <Stack direction={'row'}>
                        <Rating readOnly value={product?.review_star} size='small' />
                        <Typography variant="body2" gutterBottom sx={{ opacity: '.6', fontWeight: '500' }}>{product?.product_sold} sold</Typography>

                    </Stack>
                    {/* <Stack direction={'row'} justifyContent={'flex-end'}>
                            <IconButton>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Stack> */}
                </Stack>
            </Stack>
        </Paper>
    )
}

export default ProductCard