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

const LandingPage = () => {

    const dispatch = useDispatch()
    const bannerProducts = useSelector(state => state.productReducer.allProducts.filter((item) => item.isBanner))
    const hotDealProducts = useSelector(state => state.productReducer.allProducts)
    const featuredProducts = useSelector(state => state.productReducer.allProducts.filter((item) => item.isFeaturedProduct))
    const specialOfferProduct = useSelector(state => state.productReducer.allProducts.find((item) => item.isSpacialOffer))
    const featuredBrand = useSelector(state => state.productReducer.allProducts.find((item) => item.isSpacialOffer))
    
    console.log(specialOfferProduct)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <Container>
            <Stack mt={6} spacing={10}>
                <Hero bannerProducts={bannerProducts} />
                <Categories />
                <HotDeals hotDealProducts={hotDealProducts} />
                <FeaturedProducts featuredProducts={featuredProducts} />
                <SpecialOffer specialOfferProduct={specialOfferProduct} />
                <FeaturedBrands />
                <PopularProduct />
                {/* <TopProducts /> */}
                <PopularReview />
            </Stack>
        </Container>
    )
}

export default LandingPage