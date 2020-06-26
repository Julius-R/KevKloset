import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <>
      <div class="p-2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Link to={`/product/${item.variant.product.handle}/`}>
            {variantImage}
          </Link>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{item.title}</h2>
            <p class="text-gray-500">
              {item.variant.title === !'Default Title'
                ? item.variant.title
                : ''}
            </p>
            <p class="text-gray-500">{selectedOptions}</p>
            <p class="text-gray-500">Qty: {item.quantity}</p>
          </div>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  )
}

export default LineItem
