import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <Link href="/divers">
          <a className="navigation-links1-link">{props.text}</a>
        </Link>
        <Link href="/dierenwinkel">
          <a className="navigation-links1-link1">{props.text1}</a>
        </Link>
        <Link href="/tuincentra-nederland-en-belgi">
          <a className="navigation-links1-link2">{props.text2}</a>
        </Link>
        <Link href="/webshops-nederland-en-belgi">
          <a className="navigation-links1-link3">{props.text3}</a>
        </Link>
        <Link href="/tuin-blogs-engels">
          <a className="navigation-links1-link4">{props.text4}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-link {
            text-decoration: none;
          }
          .navigation-links1-link1 {
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links1-link2 {
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links1-link3 {
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links1-link4 {
            margin-left: 32px;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text: 'Divers',
  text3: 'Webshops BE | NL',
  text4: 'Garden Blogs',
  text1: 'Dierenwinkels',
  rootClassName: '',
  text2: 'Tuincentra BE | NL',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks1
