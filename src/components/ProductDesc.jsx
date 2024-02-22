import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const ProductDesc = () => {
    return (
        <>
            <Stack spacing={2} mt={8} width={400} bgcolor={'success'}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Specifications</Typography>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Category</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>Mobile</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Manufacturer</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>Apple</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Warranty</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>6 Months</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Serial number</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>358607726380311</Typography>
                    </Box>
                </Stack>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Typography sx={{ opacity: '.8' }} variant='body1'>Ships From</Typography>
                    <Box minWidth={200}>
                        <Typography variant='body1'>United States</Typography>
                    </Box>
                </Stack>
            </Stack>


            <Stack maxWidth={600} spacing={2} mt={8} bgcolor={'success'}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Description</Typography>
                <ul style={{lineHeight:'30px'}}>
                    <li><Typography sx={{ opacity: '.8' }}> Updated with a more matte texture, perfect for casual styling.</Typography></li>
                    <li><Typography sx={{ opacity: '.8' }}>Durable water-repellent coating.</Typography></li>
                    <li><Typography sx={{ opacity: '.8' }}> dsdsds</Typography></li>
                    <li><Typography sx={{ opacity: '.8' }}> Updated with a more matte texture, perfect for casual styling.</Typography></li>
                    <li><Typography sx={{ opacity: '.8' }}>Anti-static lining.</Typography></li>
                </ul>
                <Typography variant='body1' sx={{ opacity: '.8' }}>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money..</Typography>
            </Stack>
        </>
    )
}

export default ProductDesc