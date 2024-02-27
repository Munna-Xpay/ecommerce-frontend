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
    const bannerProducts = useSelector(state => state.productReducer.allProducts.filter((item) => item.isBanner))
    const hotDealProducts = useSelector(state => state.productReducer.allProducts)
    const popularProducts = useSelector(state => state.productReducer.allProducts)
    const featuredProducts = useSelector(state => state.productReducer.allProducts.filter((item) => item.isFeaturedProduct))
    const specialOfferProduct = useSelector(state => state.productReducer.allProducts.find((item) => item.isSpacialOffer))
    const featuredBrand = useSelector(state => state.productReducer.allProducts.find((item) => item.isFeaturedBrand))
    const popularReviews = useSelector(state => state.reviewReducer.allReviews)
    const allCategories = useSelector(state => state.categoryReducer.allCategories)
    console.log(featuredBrand)

    useEffect(() => {
        dispatch(fetchAllProducts({}))
        dispatch(fetchAllCategory())
        dispatch(fetchAllreviews())
    }, [])

    return (
        <Container>
            <Stack mt={6} spacing={10}>
                <Hero bannerProducts={bannerProducts} />
                <Categories allCategories={allCategories} />
                <HotDeals hotDealProducts={hotDealProducts} />
                <FeaturedProducts featuredProducts={featuredProducts} />
                <SpecialOffer specialOfferProduct={specialOfferProduct} />
                <FeaturedBrands featuredBrand={featuredBrand} />
                <PopularProduct popularProducts={popularProducts} />
                {/* <TopProducts /> */}
                <PopularReview popularReviews={popularReviews} />
            </Stack>
        </Container>
    )
}

export default LandingPage