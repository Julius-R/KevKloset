import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, Title, PriceTag } from './styles'

const ProductGrid = props => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <section class="text-gray-700 body-font">
      <h2 class="text-3xl text-center text-cb">Products</h2>
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap -m-4">
          {allShopifyProduct.edges ? (
            allShopifyProduct.edges.map(
              ({
                node: {
                  id,
                  handle,
                  title,
                  images: [firstImage],
                  variants: [firstVariant],
                },
              }) => (
                <React.Fragment key={id}>
                  {console.log(firstImage)}
                  <Link
                    to={`/product/${handle}/`}
                    className={`w-full ${
                      props.numRows === 3 ? 'md:w-1/3' : 'md:w-1/2 lg:w-1/4 '
                    }  p-4 `}
                  >
                    {' '}
                    <div>
                      <div className="block relative h-48 rounded overflow-hidden">
                        {firstImage && firstImage.localFile && (
                          <img
                            class="object-cover object-center w-full h-full block"
                            src={firstImage.originalSrc}
                            fluid={firstImage.localFile.childImageSharp.fluid}
                            alt={handle}
                            style={{
                              height: '350px',
                              backgroundSize: 'cover',
                              backgroundPositionX: 'center',
                            }}
                          />
                        )}
                      </div>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {title}
                        </h2>
                        <p className="mt-1">${firstVariant.price}</p>
                      </div>
                    </div>
                  </Link>
                </React.Fragment>
              )
            )
          ) : (
            <p>No Products found!</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
