import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Nav2 = (props) => {
  return (
    <>
      <nav className={`nav2-nav ${props.rootClassName} `}>
        <Link href="/divers">
          <a className="nav2-link">{props.text5}</a>
        </Link>
        <Link href="/dierenwinkel">
          <a className="nav2-link1">{props.text11}</a>
        </Link>
        <Link href="/tuincentra-nederland-en-belgie">
          <a className="nav2-link2">{props.text21}</a>
        </Link>
        <Link href="/webshops-nederland-en-belgie">
          <a className="nav2-link3">{props.text31}</a>
        </Link>
        <Link href="/tuin-blogs-engels">
          <a className="nav2-link4">{props.text41}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .nav2-nav {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .nav2-link {
            text-decoration: none;
          }
          .nav2-link1 {
            margin-left: 32px;
            text-decoration: none;
          }
          .nav2-link2 {
            margin-left: 32px;
            text-decoration: none;
          }
          .nav2-link3 {
            margin-left: 32px;
            text-decoration: none;
          }
          .nav2-link4 {
            margin-left: 32px;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .nav2-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .nav2-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav2-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav2-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav2-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav2-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Nav2.defaultProps = {
  rootClassName1: '',
  text5: 'Divers',
  text11: 'Dierenwinkels',
  text21: 'Tuincentra BE | NL',
  text31: 'Webshops BE | NL',
  text41: 'Garden Blogs',
  rootClassName: '',
}

Nav2.propTypes = {
  rootClassName1: PropTypes.string,
  text5: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  text31: PropTypes.string,
  text41: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav2
