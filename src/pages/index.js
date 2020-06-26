import React from 'react'
import { Link } from 'gatsby'
import Jumbotron from '../components/jumbotron'
import Delivery from '../components/delivery'
import StorePortal from '../components/storePortal'
import SEO from '~/components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron />
    <Delivery />
    <StorePortal />
  </>
)

export default IndexPage
