import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, LinearProgress, Rating, Stack, TextField, Typography } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useState } from 'react'

const WriteProductReview = () => {

    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    const handleClickOpen = () => setOpen(true)

    return (
        <>
            <Box sx={{ backgroundColor: 'rgb(244, 246, 248)', padding: '80px 0' }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <Stack spacing={3} direction={'column'} alignItems={'flex-start'}>
                                <Typography variant='h4' sx={{ fontWeight: 'bolder', opacity: '.9' }}>Reviews</Typography>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='h3' sx={{ fontWeight: 'bolder', opacity: '.9' }}>4.1</Typography>
                                    <Stack>
                                        <Rating size='large' />
                                        <Typography variant='body2' sx={{ opacity: '.7' }}>100k reviews</Typography>
                                    </Stack>
                                </Stack>
                                <Button onClick={handleClickOpen} size='large' sx={{ backgroundColor: '#212B36' }} variant='contained' startIcon={<EditNoteIcon />}>Write a review</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={8} sx={{ marginTop: { xs: '40px', sm: '0px' } }}>
                            <Stack spacing={2} direction={'column'} alignItems={'flex-start'}>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>5</Typography>
                                    <StarBorderIcon />
                                    <LinearProgress sx={{ width: '250px', height: '6px', borderRadius: '10px' }} color="inherit" variant='determinate' value={60} />
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>5.2k</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>4</Typography>
                                    <StarBorderIcon />
                                    <LinearProgress sx={{ width: '250px', height: '6px', borderRadius: '10px' }} color="inherit" variant='determinate' value={40} />
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>5.2k</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>3</Typography>
                                    <StarBorderIcon />
                                    <LinearProgress sx={{ width: '250px', height: '6px', borderRadius: '10px' }} color="inherit" variant='determinate' value={30} />
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>5.2k</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>2</Typography>
                                    <StarBorderIcon />
                                    <LinearProgress sx={{ width: '250px', height: '6px', borderRadius: '10px' }} color="inherit" variant='determinate' value={20} />
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>5.2k</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>1</Typography>
                                    <StarBorderIcon />
                                    <LinearProgress sx={{ width: '250px', height: '6px', borderRadius: '10px' }} color="inherit" variant='determinate' value={10} />
                                    <Typography variant='body1' sx={{ opacity: '.7' }}>5.2k</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle variant='h4' sx={{ fontWeight: 'bolder', opacity: '.9' }} id="alert-dialog-title">
                    Review
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3} sx={{ width: '500px' }} >
                        <Box>
                            <Typography variant='body2' sx={{ opacity: '.7' }} gutterBottom>Your Rating :</Typography>
                            <Rating />
                        </Box>
                        <TextField
                            id="outlined-multiline-static"
                            variant='filled'
                            label="Review"
                            multiline
                            rows={3}
                        />
                        <TextField id="outlined-basic" label="Name" variant="filled" />
                        <TextField id="outlined-basic" type='email' label="Email" variant="filled" />
                    </Stack>
                </DialogContent>
                <DialogActions sx={{padding:'30px'}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} variant='contained' autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default WriteProductReview