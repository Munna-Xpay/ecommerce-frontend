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
import { Link } from "react-router-dom";


function CheckoutDetails() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Box>
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
            1
          </span>
          Shipping Details
        </Typography>
      </Box>
      <Box mt={5}>

        <TextField
          InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
          sx={{ width: "396px" }}
          label="Street Address"
          variant="filled"
        />
        <TextField
          InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
          sx={{
            width: "396px",
            marginTop: { md: 0, xs: 2 },
            marginLeft: { md: 1, xs: 0 },
          }}
          label="Zip Code"
          variant="filled"
        />
        <Stack direction={'row'} sx={{
          display: {
            xs: 'block',
            md: 'flex'

          }
        }}  >

          <TextField InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} sx={{ width: '396px', marginTop: '20px' }} label="City" type='text' variant="filled" />

          <Autocomplete
            style={{ borderRadius: '7px' }}
            id="country-select-demo"
            sx={{ width: '396px', backgroundColor: '#f2f4f5', marginLeft: { md: 1, xs: 0 }, marginTop: '20px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
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
              2
            </span>
            Shipping Method
          </Typography>
        </Box>
      </Box>
      <Grid container mt={4}>
        <FormControl>
          <RadioGroup defaultValue="free">
            <Grid item md={6} sx={{
              marginTop: {
                xs: 2,
                md: 0
              }
            }}>
              <Box sx={{
                width: {
                  xs: 360,
                  md: 300
                }
              }} border={1} borderRadius={3} padding={2}>

                <Stack direction={"row"} spacing={2}>
                  <FormControlLabel value="free" control={<Radio />} />
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
            <Grid item md={6} sx={{
              marginTop: {
                xs: 2,
                md: 0
              }
            }}>
              <Box sx={{
                width: {
                  xs: 360,
                  md: 300
                }
              }} border={1} borderRadius={3} padding={2} >

                <Stack direction={"row"} spacing={2}>
                  <FormControlLabel value="standard" control={<Radio />} />
                  <LocalShippingIcon />
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

            <Grid item md={6} sx={{
              marginLeft: {
                md: 15,
                xs: 0
              }, marginTop: {
                xs: 2,
                md: 0
              }, marginBottom: {
                xs: 3,
                md: 0
              }
            }}>
              <Box sx={{
                width: {
                  xs: 360,
                  md: 300
                }
              }} border={1} borderRadius={3} padding={2} >

                <Stack direction={"row"} spacing={2}>
                  <FormControlLabel value="Express" control={<Radio />} />
                  <RocketLaunchIcon />
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
      <Stack mb={6} mr={3} justifyContent={'flex-start'} direction={'row'}>
      </Stack>
    </Box>
  );
}

export default CheckoutDetails;
