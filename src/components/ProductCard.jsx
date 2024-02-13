import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ isCardLike }) => {
    return (
        <Stack spacing={isCardLike ? 1 : 3} direction={isCardLike ? 'column' : 'row'} sx={{ width: '100%', position: 'relative' }}>
            <Box
                component="img"
                src="https://zone-ui.vercel.app/assets/images/z_product/product_1.png"
                alt="green iguana"
                sx={{ backgroundColor: 'rgb(244, 246, 248)', objectFit: 'contain', height: isCardLike ? '190px' : '160px', borderRadius: '12px' }}

            />
            <Box sx={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', opacity: { xs: '10', md: '0' }, '&:hover': { opacity: '10', transition: '.3s' } }}>
                <Link to={'/product/1'}><IconButton sx={{ position: 'absolute', top: isCardLike ? '130px' : '130px', left: isCardLike ? '10px' : '110px', backgroundColor: 'rgb(250, 84, 28)', color: '#efefef', boxShadow: 'rgba(250, 84, 28, 0.24) 0px 8px 16px 0px', '&:hover': { backgroundColor: 'rgb(150, 10, 28)', color: '#efefef' } }}>
                    <AddShoppingCartIcon />
                </IconButton></Link>
            </Box>
            <Stack spacing={1} gap={isCardLike ? '0' : '5px'} >
                <Typography variant="body2" gutterBottom sx={{ opacity: '.6', fontWeight: '500' }}>Electronics</Typography>
                <Typography variant="body2" gutterBottom sx={{ opacity: '.8', fontWeight: '500' }}>Samsung Galaxy</Typography>
                {!isCardLike && <Typography variant="body2" gutterBottom sx={{ opacity: '.5', fontWeight: '500' }}>
                    Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est...
                </Typography>}
                <Typography variant="body2" gutterBottom sx={{ opacity: '.8', fontWeight: '500' }}>$83.74 $ <Typography variant="body2" component={'span'} sx={{ textDecoration: 'line-through', opacity: '.6' }}>$83.74</Typography></Typography>
                <Stack direction={'row'}>
                    <Rating size='small' />
                    <Typography variant="body2" gutterBottom sx={{ opacity: '.6', fontWeight: '500' }}>497 sold</Typography>

                </Stack>
                {/* <Stack direction={'row'} justifyContent={'flex-end'}>
                            <IconButton>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Stack> */}
            </Stack>
        </Stack>

    )
}

export default ProductCard