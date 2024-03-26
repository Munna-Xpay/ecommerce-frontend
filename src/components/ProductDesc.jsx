import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import parse from 'html-react-parser';
import HTMLReactParser from 'html-react-parser';

const ProductDesc = ({ product }) => {
    return (
        <>
            <Stack spacing={2} mt={8} width={400} bgcolor={'success'}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Specifications</Typography>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Category</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>{product?.category}</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Manufacturer</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>{product?.manufacturer}</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Warranty</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>{product?.warranty}</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Serial number</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>{product?._id}</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Ships From</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>{product?.ships_from}</Typography>
                    </Box>
                </Stack>
            </Stack>


            <Stack maxWidth={600} spacing={2} mt={8} bgcolor={'success'}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Description</Typography>
              
                           <Typography sx={{ opacity: '.8' }}>{HTMLReactParser(product.description)}</Typography>
            
                <Typography variant='body1' sx={{ opacity: '.8' }}>{product?.about}</Typography>
            </Stack>
        </>
    )
}

export default ProductDesc