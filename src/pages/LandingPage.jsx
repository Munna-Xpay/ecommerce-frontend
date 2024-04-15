import { Container, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import HotDeals from '../components/HotDeals'
import FeaturedProducts from '../components/FeaturedProducts'
import SpecialOffer from '../components/SpecialOffer'
import FeaturedBrands from '../components/FeaturedBrands'
import PopularProduct from '../components/PopularProduct'
import TopProducts from '../components/TopProducts'
import PopularReview from '../components/PopularReview'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/productSlice'
import { fetchAllreviews } from '../redux/reviewSlice'
import { fetchAllCategory } from '../redux/categorySlice'

const LandingPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts({}))
        dispatch(fetchAllCategory())
        dispatch(fetchAllreviews())
    }, [])

    return (
        <Container>
            <Stack mt={6} spacing={10}>
                <Hero />
                {/* <Categories /> */}
                <HotDeals />
                <FeaturedProducts />
                <SpecialOffer />
                <FeaturedBrands />
                <PopularProduct />
                {/* <TopProducts /> */}
                <PopularReview />
            </Stack>
        </Container>
    )
}

export default LandingPage