import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Product from './product'

/*

<h2 className="text-3xl text-cw mb-4">Check out the shop!</h2>
          <Link
            state={{ category: 'Clothing' }}
            to="/store"
            className="inline-flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-cb bg-cg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Start Shopping
          </Link>
          */
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
      <section className="w-full py-8 px-4 text-center bg-cb">
        <div class="container px-5 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <div class="text-center relative z-10 w-full">
                <Link state={{ category: 'All' }} to="/store">
                  <h2 class="text-2xl font-medium title-font mb-2">
                    Shop Everything!
                  </h2>
                </Link>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <Link state={{ category: 'Clothing' }} to="/store">
                  <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <div class="text-center relative z-10 w-full">
                      <h2 class="text-xl font-medium title-font mb-2">
                        Shop Clothes
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="px-2 w-1/2">
                <Link state={{ category: 'Accessories' }} to="/store">
                  <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <div class="text-center relative z-10 w-full">
                      <h2 class="text-xl font-medium title-font mb-2">
                        Shop Accessories
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
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
