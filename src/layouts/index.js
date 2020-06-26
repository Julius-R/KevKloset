import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import ContextProvider from '~/provider/ContextProvider'

import Navigation from '~/components/Navigation'

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation siteTitle={data.site.siteMetadata.title} />

            {children}
            <footer className="w-full px-4 bg-cb text-white text-xs uppercase font-thin sticky">
              <section className="container px-4 py-3 mx-auto flex flex-wrap items-center justify-between">
                <p>
                  Kevin’s Kloset LLC © {new Date().getFullYear()} All Rights
                  Reserved
                </p>
              </section>
            </footer>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
