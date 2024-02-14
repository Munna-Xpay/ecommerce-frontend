import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, Divider, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({ register }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{width:'400px'}}>
      <Stack sx={{width:{
        xs:300,
        md:350
      }}} spacing={3} borderRadius={5}  padding={4} mt={15} boxShadow={15}>
        {register ?
          <Typography variant='h5' fontWeight={'bold'}>Get Started</Typography> : <Typography variant='h5' fontWeight={'bold'}>Login</Typography>
        }
        {register ?
          <Typography   fontSize={15} color={'gray'}>Already have an account?<Link to={'/login'} style={{ textDecoration: 'none', color: 'red', fontSize: '15px', fontWeight: 'bold' }}> Login</Link></Typography> :
          <Typography   fontSize={15} color={'gray'}>Don't have an account?<Link to={'/register'} style={{ textDecoration: 'none', color: 'red', fontSize: '15px', fontWeight: 'bold' }}> Get Started</Link></Typography>

        }
        {register &&
          <TextField  InputProps={{ disableUnderline: true, style:{borderRadius:'7px'} }} sx={{ width: {xs:300,md:350} }} label="Full Name" variant="filled" />
        }
        <TextField InputProps={{ disableUnderline: true,style:{borderRadius:'7px'} }} sx={{ width: {xs:300,md:350}}} label="Email Address" variant="filled" />
        <FormControl sx={{ width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
           style={{borderRadius:'7px'}}
            disableUnderline
            sx={{
              width: {
                xs: 300,
                md: 350
              }
            }}
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
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>


        {register &&
          <FormControl sx={{ width: '25ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
            <FilledInput
            style={{borderRadius:'7px'}}
              disableUnderline
              sx={{
                width: {
                  xs: 300,
                  md: 350
                }
              }}
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        }

        <Box  textAlign={'end'}>
          {!register &&
            <Typography fontSize={14}><Link style={{ textDecoration: 'none', color: 'black' }}>Forgot Password?</Link></Typography>
          }
        </Box>

        {
          register ?
            <Button
              sx={{
                width:{
                  xs:300,
                  md:350
                },
              
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#03111c",
                "&:hover": { backgroundColor: "#03111c" },
              }}
              disableElevation
              variant="contained"
            >
              Register
            </Button> :
            <Button
              sx={{
              
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#03111c",
                "&:hover": { backgroundColor: "#03111c" },
              }}
              disableElevation
              variant="contained"
            >
              Login
            </Button>
        }

        {register &&
          <Typography textAlign={'center'}  fontSize={12} color={'gray'}> I agree to <Link style={{color:'black'}}>Terms of Service </Link>and <Link style={{color:'black'}}>Privacy Policy</Link></Typography>

        }

        <Divider><Typography fontSize={13} color={'gray'}>or continue with</Typography></Divider>

        <Stack direction={'row'}  spacing={2} justifyContent={'center'}>
          <Button sx={{ width: '90px', border: '1px solid', borderColor: 'gray', borderRadius: '7px' }} variant='filled' disableElevation>
            <svg style={{ marginBottom: '2px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
          </Button>
          <Button sx={{ width: '90px', border: '1px solid', borderColor: 'gray', borderRadius: '7px' }} variant='filled' disableElevation>
            <svg style={{ marginBottom: '2px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 128 128"><rect width={118.35} height={118.35} x={4.83} y={4.83} fill="#3d5a98" rx={6.53} ry={6.53}></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path></svg>

          </Button>
          <Button sx={{ width: '90px', border: '1px solid', borderColor: 'gray', borderRadius: '7px' }} variant='filled' disableElevation>
            <svg style={{ marginBottom: '2px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
          </Button>
        </Stack>

      </Stack>
    </Container>
  )
}

export default Login