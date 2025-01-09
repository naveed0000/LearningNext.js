import React from 'react'

const productDetails = ({params } : {params : {productId: string}}) => {
  return (
    <div>productDetails{params.productId}</div>
  )
}

export default productDetails