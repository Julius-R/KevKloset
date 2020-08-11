import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import ContextProvider from '~/provider/ContextProvider'

import Navigation from '~/components/Navigation'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Layout = ({ children }) => {
  const [value, setValue] = useState('')
  const getEmail = e => {
    setValue(e.target.value)
  }
  const addSubscriber = () => {
    if (value !== '') {
      addToMailchimp(value)
      setValue('')
      alert('Thanks for subscribing!')
    }
  }
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
            <footer class="bg-gray-200">
              <section class="py-24">
                <h1 class="text-center text-2xl font-medium title-font mb-4">
                  Subscribe to our newsletter to hear the latest deals, offers,
                  and sales!
                </h1>
                <div class="container px-5 mx-auto">
                  <div class="lg:w-2/3 flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center mx-auto">
                    <input
                      onChange={e => getEmail(e)}
                      type="text"
                      placeholder="Placeholder"
                      className="bg-gray-100 rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4 md:w-2/3"
                    />
                    <button
                      onClick={addSubscriber}
                      class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg md:w-1/3 mt-2 md:mt-0"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </section>
              <section className="w-full px-4 bg-cb text-white text-xs uppercase font-thin sticky">
                <section className="container px-4 py-3 mx-auto flex flex-wrap items-center justify-between">
                  <p>
                    Kevin’s Kloset LLC © {new Date().getFullYear()} All Rights
                    Reserved
                  </p>
                  <section class="flex flex-wrap text-center my-3">
                    <p className="mr-2">Follow Us!</p>
                    <ul>
                      <li className="inline-block">
                        <a
                          href="https://www.facebook.com/Kevins-Kloset-LLC-111339077275864"
                          target="_blank"
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="ml-2 inline-block">
                        <a
                          href="https://www.instagram.com/kevins_kloset_llc/"
                          target="_blank"
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </section>
                  <p>
                    Made by{' '}
                    <a
                      className="text-cg cursor-pointer"
                      href="https://juliusr.dev/"
                      target="blank"
                    >
                      Julius
                    </a>
                  </p>
                </section>
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
