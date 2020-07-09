import React, { useContext, useState, useEffect } from 'react'
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
              productType
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
  const [display, setDisplay] = useState()
  const [products, setProducts] = useState(allShopifyProduct.edges)
  const [category, setCategory] = useState(props.item.category)
  const getProductInfo = category => {
    if (category === 'All') {
      setDisplay(products)
    } else {
      const items = products.filter(item => {
        if (item.node.productType === category) {
          return true
        } else {
          return false
        }
      })
      setDisplay(items)
    }
  }
  useEffect(() => {
    getProductInfo(category)
  }, [category])
  console.log(props.item.category)
  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <section class="text-gray-700 body-font">
      <div class="flex justify-around">
        <h2 class="text-3xl text-center text-cb">Products</h2>
        <div class="flex items-center">
          <p class="text-gray-900 title-font text-lg font-medium mr-4">
            Filter
          </p>
          <select
            class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={event => setCategory(event.target.value)}
          >
            <option value="All">All</option>
            <option value="Clothing">Clothes</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap -m-4">
          {display ? (
            display.map(
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
                  <Link
                    to={`/product/${handle}/`}
                    className={`w-full ${
                      props.numRows === 3 ? 'md:w-1/3' : 'md:w-1/2 lg:w-1/4 '
                    }  p-4 `}
                  >
                    {' '}
                    <div>
                      <div className="block relative rounded overflow-hidden">
                        {firstImage && firstImage.localFile && (
                          <img
                            class="object-cover object-center w-full h-full block"
                            src={firstImage.originalSrc}
                            fluid={firstImage.localFile.childImageSharp.fluid}
                            alt={handle}
                            style={{
                              height: '450px',
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
/*
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
                  <Link
                    to={`/product/${handle}/`}
                    className={`w-full ${
                      props.numRows === 3 ? 'md:w-1/3' : 'md:w-1/2 lg:w-1/4 '
                    }  p-4 `}
                  >
                    {' '}
                    <div>
                      <div className="block relative rounded overflow-hidden">
                        {firstImage && firstImage.localFile && (
                          <img
                            class="object-cover object-center w-full h-full block"
                            src={firstImage.originalSrc}
                            fluid={firstImage.localFile.childImageSharp.fluid}
                            alt={handle}
                            style={{
                              height: '450px',
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
*/
