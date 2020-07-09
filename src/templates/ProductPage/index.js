import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
/*
<button onClick={() => setToggler(!toggler)}>
              Toggle Lightbox
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                'images/random-image.jpg',
                'https://i.imgur.com/fsyrScY.jpg',
                'https://www.youtube.com/watch?v=xshEZzpS4CQ',
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              ]}
            />
             */
/*
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
*/
const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const [toggler, setToggler] = useState(false)
  let srcs = product.images.map(image => image.originalSrc)
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <FsLightbox toggler={toggler} sources={srcs} />
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mb-12 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full flex flex-wrap">
              <div class="md:p-2 p-1 w-full">
                <img
                  onClick={() => setToggler(!toggler)}
                  class="w-full h-full block cursor-pointer"
                  src={product.images[0].originalSrc}
                  key={product.images[0].id}
                  alt={product.images[0].title}
                  style={{
                    maxHeight: '350px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              {product.images.map(image => (
                <div class="md:p-2 p-1 w-1/3">
                  <img
                    onClick={() => setToggler(!toggler)}
                    class="w-full object-cover h-full object-center block cursor-pointer"
                    src={image.originalSrc}
                    fluid={image.localFile.childImageSharp.fluid}
                    key={image.id}
                    alt={product.title}
                    style={{
                      maxHeight: '150px',
                      objectFit: 'fill',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              ))}
            </div>

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
