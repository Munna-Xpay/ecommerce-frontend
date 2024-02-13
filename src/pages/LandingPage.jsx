import { Container, Stack } from '@mui/material'
import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import HotDeals from '../components/HotDeals'
import FeaturedProducts from '../components/FeaturedProducts'
import SpecialOffer from '../components/SpecialOffer'
import FeaturedBrands from '../components/FeaturedBrands'
import PopularProduct from '../components/PopularProduct'
import TopProducts from '../components/TopProducts'
import PopularReview from '../components/PopularReview'

const LandingPage = () => {
    return (
        <Container>
            <Stack mt={6} spacing={10}>
                <Hero />
                <Categories />
                <HotDeals />
                <FeaturedProducts />
                <SpecialOffer />
                <FeaturedBrands />
                <PopularProduct />
                <TopProducts />
                <PopularReview />
            </Stack>
        </Container>
    )
}

export default LandingPage