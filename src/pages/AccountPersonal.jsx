import React, { useEffect, useState } from 'react'
import { Autocomplete, Box,  Button,  FilledInput,  FormControl,  IconButton,  InputAdornment,  InputLabel,   MenuItem,   Select,  Stack,  TextField, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { countries } from '../CountryData';


function AccountPersonal() {

  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [gender, setGender] =useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

 

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
      <TextField   InputProps={{ disableUnderline: true }} sx={{width:'396px'}}  label="First Name" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px',marginTop:{md:0,xs:2}, marginLeft:{md:1,xs:0}}}  label="Last Name" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px', marginTop:'20px'}}  label="Email Address" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px',marginLeft:{md:1,xs:0}, marginTop:'20px'}}  label="Phone Number" variant="filled" />
      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px', marginTop:'20px'}}  InputLabelProps={{
        shrink: true,
      }}  label="Birthday" type='date' variant="filled" />
     
      <FormControl sx={{width:'396px',marginLeft:{md:1,xs:0}, marginTop:'20px', backgroundColor:'#edf2ef'}} >
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
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

      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px', marginTop:'20px'}}  label="Street Address" type='text' variant="filled" />
      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px', marginLeft:{md:1,xs:0}, marginTop:'20px'}}  label="Zip Code" variant="filled" />
      <Stack direction={'row'}  sx={{display:{
        xs:'block',
        md:'flex'
      
      }}}  >
      
      <TextField   InputProps={{ disableUnderline: true }}  sx={{width:'396px', marginTop:'20px'}}  label="City" type='text' variant="filled" />
      
      <Autocomplete
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
   
      
      <Typography mt={5} mb={3} variant='h6' fontWeight={'bold'}>Change Password</Typography>

      <FormControl  sx={{  width: '25ch' }} variant="filled">
          <InputLabel   htmlFor="filled-adornment-password">Old Password</InputLabel>
          <FilledInput
         disableUnderline
          sx={{width:{
            xs:396,
            md:804
          } }}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl  sx={{  width: '25ch', display:'block' }} variant="filled">
          <InputLabel   htmlFor="filled-adornment-password">New Password</InputLabel>
          <FilledInput
         disableUnderline
          sx={{width:{
            xs:396,
            md:804
          }, marginTop:'10px' }}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl  sx={{  width: '25ch', display:'block' }} variant="filled">
          <InputLabel   htmlFor="filled-adornment-password">Confirm New Password</InputLabel>
          <FilledInput
         disableUnderline
          sx={{width:{
            xs:396,
            md:804
          }, marginTop:'10px' }}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button sx={{marginTop:'15px',backgroundColor:'#01040a', '&:hover':{backgroundColor:'#01040a'}}}  disableElevation variant="contained" >
  Save Changes
</Button>
    </Box>
    </Box>
  )
}

export default AccountPersonal