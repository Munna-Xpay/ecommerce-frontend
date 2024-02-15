import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { countries } from "../CountryData";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


function CheckoutDetails() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  

  return (
    <Box>
      <Box>
        <Typography variant="h6">
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "1px 7px",
              borderRadius: "30px",
              marginRight: "5px",
            }}
          >
            1
          </span>
          Personal Details
        </Typography>
      </Box>
      <Box>
        <Stack
          direction={"row"}
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
          }}
          mt={3}
        >
          <Typography mt={1} fontSize={15} fontWeight={"bold"}>
            Sign in with :
          </Typography>
         
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              marginLeft: "4px",
              color: "black",
              "&:hover": { backgroundColor: "white" },
            }}
            variant="contained"
          >
            <svg style={{marginBottom:'2px',marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em"   viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
           <Typography fontSize={12} fontWeight={'bold'}>Google</Typography> 
          </Button>{" "}
         
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              marginLeft: "4px",
              color: "black",
              "&:hover": { backgroundColor: "white" },
            }}
            variant="contained"
          >
            <svg  style={{marginBottom:'2px',marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 128 128"><rect width={118.35} height={118.35} x={4.83} y={4.83} fill="#3d5a98" rx={6.53} ry={6.53}></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path></svg>
            <Typography fontSize={12} fontWeight={'bold'}>Facebook</Typography> 
          </Button>{" "}
          
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              marginLeft: "4px",
              color: "black",
              "&:hover": { backgroundColor: "white" },
            }}
            variant="contained"
          >
            <EmailIcon sx={{ marginBottom: "5px", marginRight: "5px" }} />{" "}
            <Typography fontSize={11} fontWeight={'bold'}>Continue With Email</Typography> 
          </Button>{" "}
        </Stack>
      </Box>
     
     
      <Box mt={5}>
        
        <TextField
          InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}
          sx={{ width: "396px" }}
          label="First Name"
          variant="filled"
        />
        <TextField
          InputProps={{ disableUnderline: true ,style:{borderRadius:'7px'}}}
          sx={{
            width: "396px",
            marginTop: { md: 0, xs: 2 },
            marginLeft: { md: 1, xs: 0 },
          }}
          label="Last Name"
          variant="filled"
        />
      
        <TextField
          InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}
          sx={{ width: "396px", marginTop: "10px" }}
          label="Email Address"
          variant="filled"
        />
        <TextField
          InputProps={{ disableUnderline: true ,style:{borderRadius:'7px'}}}
          sx={{
            width: "396px",
            marginTop: "10px",
            marginLeft: { xs: 0, md: 1 },
          }}
          label="Phone Number"
          variant="filled"
        />
        
        <FormControl sx={{ width: "25ch", marginTop: "10px" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
          style={{borderRadius:'7px'}}
            disableUnderline
            sx={{
              width: {
                xs: 396,
                md: 396,
              },
            }}
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ?   <Visibility />:<VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Divider sx={{ marginTop: "30px" }} variant="middle" />
      <Box mt={5}>
        <Typography variant="h6">
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "1px 7px",
              borderRadius: "30px",
              marginRight: "5px",
            }}
          >
            2
          </span>
          Shipping Details
        </Typography>
      </Box>
      <Box mt={5}>
         
      <TextField
          InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}
          sx={{ width: "396px" }}
          label="Street Address"
          variant="filled"
        />
        <TextField
          InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}
          sx={{
            width: "396px",
            marginTop: { md: 0, xs: 2 },
            marginLeft: { md: 1, xs: 0 },
          }}
          label="Zip Code"
          variant="filled"
        />
        <Stack direction={'row'}  sx={{display:{
        xs:'block',
        md:'flex'
      
      }}}  >
      
      <TextField   InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }}  sx={{width:'396px', marginTop:'20px'}}  label="City" type='text' variant="filled" />
      
      <Autocomplete
      style={{borderRadius:'7px'}}
      id="country-select-demo"
      sx={{width:'396px',backgroundColor:'#f2f4f5', marginLeft:{md:1,xs:0}, marginTop:'20px',boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}} 
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
    <Box mt={5}>
        <Typography variant="h6">
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "1px 7px",
              borderRadius: "30px",
              marginRight: "5px",
            }}
          >
            3
          </span>
          Shipping Method
        </Typography>
      </Box>
      </Box>
<Grid container mt={4}>
  <FormControl>
  <RadioGroup defaultValue="free">
   <Grid item md={6} sx={{marginTop:{
        xs:2,
        md:0
      }}}>
      <Box sx={{width:{
        xs:360,
        md:300
      }}}   border={1} borderRadius={3}  padding={2}>
     
            <Stack direction={"row"} spacing={2}>
            <FormControlLabel value="free" control={<Radio />}  />
              <PedalBikeIcon />
              <Box
                width={250}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography justifyContent={"space-between"}>Free</Typography>
                <Typography>$0</Typography>
              </Box>
              <br />
            </Stack>
            <Typography fontSize={14} sx={{ marginLeft: "55px" }}>
              5-7 day delivery
            </Typography>
      </Box>
      </Grid>
      <Grid item md={6} sx={{marginTop:{
        xs:2,
        md:0
      }}}>
      <Box sx={{width:{
        xs:360,
        md:300
      }}}  border={1} borderRadius={3} padding={2} >
      
            <Stack direction={"row"} spacing={2}>
            <FormControlLabel value="standard" control={<Radio />}  />
            <LocalShippingIcon/>
              <Box
                width={250}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography justifyContent={"space-between"}>Standard</Typography>
                <Typography>$10</Typography>
              </Box>
              <br />
            </Stack>
            <Typography fontSize={14} sx={{ marginLeft: "55px" }}>
              3-5 day delivery
            </Typography>
      </Box>
      </Grid>

      <Grid item md={6} sx={{marginLeft:{
        md:15,
        xs:0
      },marginTop:{
        xs:2,
        md:0
      },marginBottom:{
        xs:3,
        md:0
      }}}>
      <Box sx={{width:{
        xs:360,
        md:300
      }}} border={1} borderRadius={3} padding={2} >
      
            <Stack direction={"row"} spacing={2}>
            <FormControlLabel value="Express" control={<Radio />}  />
              <RocketLaunchIcon/>
              <Box
                width={250}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography justifyContent={"space-between"}>Express</Typography>
                <Typography>$20</Typography>
              </Box>
              <br />
            </Stack>
            <Typography fontSize={14} sx={{ marginLeft: "55px" }}>
              2-3 day delivery
            </Typography>
      </Box>
      </Grid>

      </RadioGroup>
      </FormControl>
      </Grid>
    </Box>
  );
}

export default CheckoutDetails;
