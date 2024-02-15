import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'


function Footer() {
  return (
        <>
          
  <footer class="site-footer">
    <Container>
      <Grid container >
        <Grid item sm={12} md={6} p={3}>
          <Typography variant='h6'>About</Typography>
          <Typography textAlign={'justify'} fontSize={15}><span className='hdng fs-5 font-medium'>Ecommerce</span><i> Shop with us! </i><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dolor quas nihil culpa dolores, odit iste atque adipisci earum inventore aut porro error vero quos aliquid mollitia veniam laborum minima.</Typography>
        </Grid>

        <Grid item xs={6} md={3} p={3}>
          <Typography variant='h6'>Categories</Typography>
          <Stack class="footer-links">
            <Typography fontSize={15}><a href="">Mens </a></Typography>
            <Typography fontSize={15}><a href="">Womens</a></Typography>
            <Typography fontSize={15}><a href="">Kids</a></Typography>
            <Typography fontSize={15}><a href="">Electronics</a></Typography>
            <Typography fontSize={15}><a href="">Home Appliances</a></Typography>
            <Typography fontSize={15}><a href="">Kitchen</a></Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} md={3} p={3}>
          <Typography variant='h6'>Quick Links</Typography>
          <Stack class="footer-links">
            <Typography fontSize={15}><a href="">About Us</a></Typography>
            <Typography fontSize={15}><a href="">Contact Us</a></Typography>
            <Typography fontSize={15}><a href="">Contribute</a></Typography>
            <Typography fontSize={15}><a href="">Privacy Policy</a></Typography>
            <Typography fontSize={15}><a href="">Sitemap</a></Typography>
          </Stack>
        </Grid>
      </Grid>
      <hr/>
    </Container>
    <Container>
      <Grid>
        <Grid item md={8} sm={6} xs={12} p={3}>
          <Typography fontSize={15} class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
       <a href="#"> Ecommerce</a>.
          </Typography>
        </Grid>

    
      </Grid>
    </Container>
</footer>
    </>

  )
}

export default Footer
  


