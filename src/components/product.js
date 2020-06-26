import React from 'react'
import { Link } from 'gatsby'
export default function product(props) {
  const {
    handle,
    title,
    priceRange: {
      maxVariantPrice: { amount },
    },
    images,
  } = props.data
  return (
    <Link
      to={`/product/${handle}`}
      className={`w-full ${
        props.numRows === 3 ? 'md:w-1/3' : 'md:w-1/2 lg:w-1/4 '
      }  p-4 `}
    >
      {' '}
      {console.log(props)}
      <div>
        <div className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            src={images[0].originalSrc}
            style={{
              height: '350px',
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
            }}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${amount}</p>
        </div>
      </div>
    </Link>
  )
}
