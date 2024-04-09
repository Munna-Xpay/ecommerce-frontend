import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { countries } from '../CountryData';
import { useDispatch, useSelector } from 'react-redux';
import { profileEdit } from '../redux/userSlice';
import toast, { Toaster } from 'react-hot-toast';



function AccountPersonal() {

  const dispatch = useDispatch()
  const [userGender, setUserGender] = useState('')
 
  //state for storing user data
  const [userData, setUserData] = useState({})

 //data from store
  const userDetails = useSelector(state => state.userReducer.user)
  console.log(userDetails);
  useEffect(() => {
    if (userDetails) {
      setUserData(userDetails)
    }
  }, [userDetails])

  const setInput = (e) => {
    const { value, name } = e.target
    setUserData({ ...userData, [name]: value })
  }
 // console.log(userData);

  //handle edit func
  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(profileEdit(userData))
    // toast.success('Profile updated!')
  }

  //handle autocomplete component select country
  const [selectedOption, setSelectedOption] = useState(null)
  const handleAutocompleteChange = (event, newValue) => {
    setSelectedOption(newValue);
    //console.log(newValue);
    setUserData({ ...userData, country: newValue })
  };

  return (
    <Box>

      <Typography sx={{ width: '100%', marginLeft: { md: 0, xs: 1 } }} variant='h6' fontWeight={'bold'}>Personal</Typography>

      <Box
        sx={{ width: '100%', marginLeft: { md: 0, xs: 1 } }}
        noValidate
        autoComplete="off"
      >

        <Box sx={{ width: '100%', marginTop: '20px' }}>
          <TextField onChange={(e) => setInput(e)} name='fullName' value={userData?.fullName} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px' }} label="Name" variant="filled" />
          <TextField onChange={(e) => setInput(e)} name='email' value={userData?.email} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginLeft: { md: 1, xs: 0 } }} label="Email" variant="filled" />
          <TextField onChange={(e) => setInput(e)} name='phoneNum' value={userData?.phoneNum} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginTop: '20px' }} label="Phone Number" variant="filled" />
          <TextField onChange={(e) => setInput(e)} value={userData?.birthday} name='birthday' InputLabelProps={{ shrink: true }}
            InputProps={{ disableUnderline: true, style: { borderRadius: '7px' }, min: '1900-01-01', max: '2100-12-31' }}
            sx={{ width: '396px', marginTop: '20px', marginLeft: { md: 1, xs: 0 }, }} label="Birthday" type='date' variant="filled" />

          <FormControl style={{ borderRadius: '7px' }} sx={{ width: '396px', marginTop: '20px', backgroundColor: '#f2f4f5' }} >
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              style={{ borderRadius: '7px' }}
              sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userData.gender || userGender}
              name='gender'
              label="Gender"
              onChange={(e) => setInput(e)}

            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Others'}>Others</MenuItem>
            </Select>
          </FormControl>

          <TextField onChange={(e) => setInput(e)} name='address' value={userData?.address} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginTop: '20px', marginLeft: { md: 1, xs: 0 }, }} label="Street Address" type='text' variant="filled" />
          <TextField onChange={(e) => setInput(e)} name='zipCode' value={userData?.zipCode} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginTop: '20px' }} label="Zip Code" variant="filled" />
          <TextField onChange={(e) => setInput(e)} name='city' value={userData?.city} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginTop: '20px', marginLeft: { md: 1, xs: 0 } }} label="City" type='text' variant="filled" />

          <Autocomplete
            onChange={handleAutocompleteChange}
            value={userData?.country||selectedOption}
            name='country'
            style={{ borderRadius: '7px' }}
            id="country-select-demo"
            sx={{ width: '396px', backgroundColor: '#edf2ef', marginTop: '20px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            options={countries.map(country=>country.label)}
            autoHighlight
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
        </Box>

        <Button onClick={(e) => handleEdit(e)} sx={{ marginTop: '15px', backgroundColor: '#03111c', '&:hover': { backgroundColor: '#03111c' } }} disableElevation variant="contained" >
          Save Changes
        </Button>
      </Box>
      <Toaster position="top-center"
          reverseOrder={false}
          containerStyle={{
            padding: '10px',
            fontSize: '17px',
            fontFamily: 'sans-serif',
          }}
      />
    </Box>
  )
}

export default AccountPersonal

