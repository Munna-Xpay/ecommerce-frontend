import { Stack, Typography } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const VoucherCard = () => {
    return (
        <Stack direction={'row'} spacing={4} alignItems={'center'} sx={{ padding: '15px', border: '3px solid #efefef', borderRadius: '12px' }}>
            <Stack spacing={1} alignItems={'center'} justifyContent={'center'} >
                <StarBorderIcon fontSize='large' />
                <Typography variant='subtitle1' sx={{ opacity: '.9', fontWeight: 'bold' }}>Shipping</Typography>
            </Stack>
            <Stack sx={{ borderLeft: '2px solid #efefef', paddingLeft: '15px' }}>
                <Typography gutterBottom variant='subtitle1' sx={{ opacity: '.9', fontWeight: '500' }}>6% off</Typography>
                <Typography gutterBottom variant='subtitle2' sx={{ opacity: '.9' }}>Min. Spend $0</Typography>
                <Stack direction={'row'} color={'red'} spacing={1} alignItems={'center'}>
                    <AccessTimeIcon fontSize='small' />
                    <Typography variant='body1' sx={{ opacity: '.9' }}>1 day left</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default VoucherCard