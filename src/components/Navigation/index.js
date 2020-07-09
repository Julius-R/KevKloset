import React, { useContext } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import pop from '../../images/logo.png'

import StoreContext from '~/context/StoreContext'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <nav className="w-full px-4 relative">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div
            className="bg-cover "
            style={{
              backgroundImage: `url(${pop})`,
              width: '175px',
              height: '175px',
            }}
          ></div>
        </Link>
        <ul class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            state={{ category: 'All' }}
            className="cursor-pointer px-3 py-2 flex items-center text-xl uppercase font-thin leading-snug text-cb hover:opacity-75"
            to="/store"
          >
            Store
          </Link>
          <Link className="nav-item" to="/cart">
            <div className="px-3 py-2 flex items-center text-xl uppercase font-thin leading-snug text-cb hover:opacity-75 s">
              Cart
              {hasItems && (
                <span className="-mt-4 ml-2 text-cg text-sm ">{quantity}</span>
              )}
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

// ;<Container>
//   <MenuLink to="/">{siteTitle}</MenuLink>
//   <MenuLink to="/cart">
//     {hasItems && <CartCounter>{quantity}</CartCounter>}
//     Cart
//   </MenuLink>
// </Container>
// <nav className="w-full px-4 relative">

// </nav>

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
