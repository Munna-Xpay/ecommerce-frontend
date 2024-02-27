import React, { useEffect, useState } from 'react'
import { Autocomplete, Box,  Button,  FormControl,  InputLabel,   MenuItem,   Select,  Stack,  TextField, Typography } from '@mui/material'
import { countries } from '../CountryData';
import { useSelector } from 'react-redux';


function AccountPersonal() {

  const [gender, setGender] =useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };


//state for storing form data
  const [profileData,setProfileData]=useState({
    fullName:"",email:"",phoneNum:"",birthday:"",gender:"",address:"",city:"",country:""
  })

const userData=useSelector(state=>state.userReducer.user)
useEffect(()=>{
  if(userData){
    setProfileData({...profileData,})
  }
})

  

  return (
    <Box>

<Typography variant='h6' fontWeight={'bold'}>Personal</Typography>

<Box
      component="form"
      sx={{width:'100%' }}
      noValidate
      autoComplete="off"
    >

        <Box  sx={{width:'100%', marginTop:'20px'}}>
      <TextField   InputProps={{ disableUnderline: true ,style:{borderRadius:'7px'}}} sx={{width:'396px'}}  label="First Name" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true ,style:{borderRadius:'7px'}}}  sx={{width:'396px',marginTop:{md:0,xs:2}, marginLeft:{md:1,xs:0}}}  label="Last Name" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}  sx={{width:'396px', marginTop:'20px'}}  label="Email Address" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true ,style:{borderRadius:'7px'}}}  sx={{width:'396px',marginLeft:{md:1,xs:0}, marginTop:'20px'}}  label="Phone Number" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}  sx={{width:'396px', marginTop:'20px'}}  InputLabelProps={{
        shrink: true,
      }}  label="Birthday" type='date' variant="filled" />
     
      <FormControl  style={{borderRadius:'7px'}} sx={{width:'396px',marginLeft:{md:1,xs:0}, marginTop:'20px', backgroundColor:'#f2f4f5'}} >
        <InputLabel  id="demo-simple-select-label">Gender</InputLabel>
        <Select
          style={{borderRadius:'7px'}}
           sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
          <MenuItem value={3}>Others</MenuItem>
        </Select>
      </FormControl>

      <TextField   InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}  sx={{width:'396px', marginTop:'20px'}}  label="Street Address" type='text' variant="filled" />
      <TextField   InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}  sx={{width:'396px', marginLeft:{md:1,xs:0}, marginTop:'20px'}}  label="Zip Code" variant="filled" />
      <Stack direction={'row'}  sx={{display:{
        xs:'block',
        md:'flex'
      
      }}}  >
      
      <TextField   InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}  sx={{width:'396px', marginTop:'20px'}}  label="City" type='text' variant="filled" />
      
      <Autocomplete
      style={{borderRadius:'7px'}}
      id="country-select-demo"
      sx={{width:'396px',backgroundColor:'#edf2ef', marginLeft:{md:1,xs:0}, marginTop:'20px',boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}} 
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    </Stack>
      </Box>

        <Button sx={{marginTop:'15px',backgroundColor:'#03111c', '&:hover':{backgroundColor:'#03111c'}}}  disableElevation variant="contained" >
  Save Changes
</Button>
    </Box>
    </Box>
  )
}

export default AccountPersonal