import React from 'react'
import createProductDetail from './createProductDetail'
import ProductDetailData from './ProductDetailData'

const ProductDetailSlide = () => {
  return (
    <>
      {createProductDetail(ProductDetailData, "Recommended for you")}
    </>
  )
}

export default ProductDetailSlide
