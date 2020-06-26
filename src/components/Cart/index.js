import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      <div class="md:w-1/2 overflow-hidden sm:mr-10 flex items-end justify-start relative">
        <div class="bg-white relative flex flex-wrap py-6 w-full">
          {lineItems}
        </div>
      </div>
      <div class="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Subtotal
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          $ {checkout.subtotalPrice}
        </p>
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Taxes</h2>
        <p class="leading-relaxed mb-5 text-gray-600">$ {checkout.totalTax}</p>
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Total</h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          $ {checkout.totalPrice}
        </p>
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Check out
        </button>
      </div>
    </>
  )
}

export default Cart
