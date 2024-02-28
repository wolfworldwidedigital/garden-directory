import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Nav1 = (props) => {
  return (
    <>
      <nav className={`nav1-nav ${props.rootClassName} `}>
        <Link href="/tuin-blogs-nederlands">
          <a className="nav1-link">{props.text5}</a>
        </Link>
        <Link href="/tuincentrum-leveranciers">
          <a className="nav1-link2">{props.text11}</a>
        </Link>
        <Link href="/garden-centres-united-kingdom">
          <a className="nav1-link3">{props.text21}</a>
        </Link>
        <Link href="/garden-centres-canada">
          <a className="nav1-link4">{props.text31}</a>
        </Link>
        <Link href="/garden-webshops-ireland">
          <a className="nav1-link5">{props.text41}</a>
        </Link>
        <Link href="/garden-webshops-united-kingdom">
          <a className="nav1-link6">{props.text411}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .nav1-nav {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .nav1-link {
            text-align: center;
            text-decoration: none;
          }
          .nav1-link2 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav1-link3 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav1-link4 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav1-link5 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav1-link6 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav1-root-class-name {
            align-self: center;
          }

          @media (max-width: 767px) {
            .nav1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .nav1-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav1-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav1-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav1-link6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Nav1.defaultProps = {
  rootClassName1: '',
  text5: 'Tuinblogs',
  text11: 'Tuincentrum Leveranciers',
  text21: 'Garden Centres UK',
  text31: 'Garden Centres CA',
  text41: 'Webshops IR',
  text411: 'Webshops UK',
  rootClassName: '',
}

Nav1.propTypes = {
  rootClassName1: PropTypes.string,
  text5: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  text31: PropTypes.string,
  text41: PropTypes.string,
  text411: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav1
