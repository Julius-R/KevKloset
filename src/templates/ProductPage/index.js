import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      {console.log(product.images)}
      <SEO title={product.title} description={product.description} />
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mb-12 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            {product.images.map(image => (
              <img
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={image.originalSrc}
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
                style={{
                  maxHeight: '350px',
                  backgroundSize: 'cover',
                  backgroundPositionX: 'center',
                }}
              />
            ))}
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <p class="leading-relaxed">{product.description}</p>
              <ProductForm product={product} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
