import { FormControl, Grid, IconButton, InputLabel, MenuItem, Pagination, Select, Stack } from '@mui/material'
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import WindowIcon from '@mui/icons-material/Window';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/productSlice';

const ProductList = () => {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.productReducer.allProducts)
    const [isCardLike, SetIsCardLike] = useState(true)
    const [sort, setSort] = useState("latest")
    console.log(sort)

    useEffect(() => {
        dispatch(fetchAllProducts({ sort }))
    }, [sort])

    const listAllProducts = allProducts.map((item, index) => {
        return (
            <Grid item xs={isCardLike ? 6 : 12} sm={isCardLike ? 3 : 12}>
                <ProductCard isCardLike={isCardLike} product={item} />
            </Grid>
        )
    })

    return (
        <>
            <Stack spacing={2} sx={{ padding: '20px 0px' }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} spacing={1}>
                        <IconButton onClick={() => SetIsCardLike(false)} sx={{ backgroundColor: !isCardLike && '#efefef' }}> <ViewStreamIcon fontSize='small' sx={{ opacity: '.8' }} /></IconButton>
                        <IconButton onClick={() => SetIsCardLike(true)} sx={{ backgroundColor: isCardLike && '#efefef' }}><WindowIcon fontSize='small' sx={{ opacity: '.8' }} /></IconButton>
                    </Stack>

                    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            size='small'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            label="Sort"
                        >
                            <MenuItem value='latest'>Latest</MenuItem>
                            <MenuItem value='oldest'>Oldest</MenuItem>
                            <MenuItem value='popular'>Popular</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Grid container spacing={isCardLike ? 2 : 4}>
                    {listAllProducts}
                </Grid>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Pagination count={10} color="primary" />
                </Stack>
            </Stack>
        </>
    )
}

export default ProductList