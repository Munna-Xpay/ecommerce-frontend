import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, LinearProgress, Rating, Stack, TextField, Typography } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addReviews } from '../redux/reviewSlice';
import { validateReview } from '../validations/reviewValidation';

const WriteProductReview = ({ productReviews, productId }) => {

    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    const [createreview, setCreatereview] = useState({
        review_stars: 0,
        review: "",
        username: "",
    })
console.log(user)
    const handleClose = () => {
        setOpen(false)
        setCreatereview({
            review: "",
            review_stars: 0,
            username: ""
        })
        setError({})
    }
    const handleClickOpen = () => setOpen(true)

    const handleSubmitReview = () => {
        const { review, review_stars, username } = createreview;
        if (!review || !username) {
            setError(validateReview(createreview))
        }

        if (review && username) {
            console.log(productId)
            console.log(user._id)
            try {
                dispatch(addReviews({ ...createreview, date: new Date(), reviewFrom: user._id, productId }))
                handleClose()
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <>
            <Box sx={{ backgroundColor: 'rgb(244, 246, 248)', padding: '80px 0' }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <Stack spacing={3} direction={'column'} alignItems={'flex-start'}>
                                <Typography variant='h4' sx={{ fontWeight: 'bolder', opacity: '.9' }}>Reviews</Typography>
                                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                    <Typography variant='h3' sx={{ fontWeight: 'bolder', opacity: '.9' }}>{productReviews?.map(rev => rev?.review_stars).length > 0 && productReviews?.map(rev => rev?.review_stars).reduce((a, b) => a + b) / productReviews?.length}</Typography>
                                    <Stack>
                                        <Rating readOnly size='large' value={productReviews?.map(rev => rev?.review_stars).length > 0 && Math.round(productReviews?.map(rev => rev?.review_stars).reduce((a, b) => a + b) / productReviews?.length)} />
                                        <Typography variant='body2' sx={{ opacity: '.7' }}>{productReviews?.length} reviews</Typography>
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
                            <Rating value={createreview.review_stars} onChange={(e) => setCreatereview({ ...createreview, review_stars: Number(e.target.value) })} />
                        </Box>
                        <TextField
                            id="outlined-multiline-static"
                            variant='filled'
                            label="Review"
                            multiline
                            rows={3}
                            error={error.review}
                            value={createreview.review}
                            helperText={error.review && error.review}
                            onChange={(e) => setCreatereview({ ...createreview, review: e.target.value })}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="filled"
                            error={error.username}
                            value={createreview.username}
                            helperText={error.username && error.username}
                            onChange={(e) => setCreatereview({ ...createreview, username: e.target.value })}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ padding: '30px' }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmitReview} variant='contained' autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default WriteProductReview