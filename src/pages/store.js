import React from 'react'
import ProductGrid from '~/components/ProductGrid'
import SEO from '~/components/seo'

function Store(props) {
  return (
    <>
      <SEO title="Shop" keywords={[`gatsby`, `application`, `react`]} />
      <ProductGrid item={props.location.state} />
    </>
  )
}

export default Store
