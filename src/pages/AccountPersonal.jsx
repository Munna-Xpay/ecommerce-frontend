import React from 'react'
import { Box, Stack, TextField, Typography } from '@mui/material'


function AccountPersonal() {
  return (
    <Box>
<Typography variant='h6' fontWeight={'bold'}>Personal</Typography>
<Box
      component="form"
      sx={{width:'100%' }}
      noValidate
      autoComplete="off"
    >
        <Box sx={{width:'100%', marginTop:'20px'}}>
      <TextField sx={{width:'396px'}}  label="First Name" variant="filled" />
      <TextField  sx={{width:'396px', marginLeft:'10px'}}  label="Last Name" variant="filled" />
      <TextField  sx={{width:'396px', marginTop:'20px'}}  label="Email Address" variant="filled" />
      <TextField  sx={{width:'396px', marginLeft:'10px', marginTop:'20px'}}  label="Phone Number" variant="filled" />
      <TextField  sx={{width:'396px', marginTop:'20px'}}  label="Birthday" type='date' variant="filled" in />
      </Box>
    </Box>
    </Box>
  )
}

export default AccountPersonal