import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Product from './product'

export default function StorePortal() {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          limit: 3
          sort: { order: DESC, fields: [createdAt] }
        ) {
          edges {
            node {
              handle
              images {
                originalSrc
              }
              title
              priceRange {
                maxVariantPrice {
                  amount
                }
              }
              id
            }
          }
        }
      }
    `
  )
  return (
    <>
      {console.log(allShopifyProduct)}
      <section className="py-8 px-4 text-center bg-cb">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-3xl text-cw mb-4">Check out the shop!</h2>
          <Link
            to="/store"
            className="inline-flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-cb bg-cg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Start Shopping
          </Link>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900 text-center">
            Newest Arrivals
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {allShopifyProduct.edges
              ? allShopifyProduct.edges.map(product => {
                  return (
                    <Product
                      key={product.node.id}
                      numRows={3}
                      data={product.node}
                    />
                  )
                })
              : null}
          </div>
        </div>
      </section>
    </>
  )
}
