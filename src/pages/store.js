import React from 'react'
import ProductGrid from '~/components/ProductGrid'
import SEO from '~/components/seo'

function Store() {
  return (
    <>
      <SEO title="Shop" keywords={[`gatsby`, `application`, `react`]} />
      <ProductGrid />
    </>
  )
}

export default Store
