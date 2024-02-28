import React from 'react'

import PropTypes from 'prop-types'

const Nav11 = (props) => {
  return (
    <>
      <nav className={`nav11-nav ${props.rootClassName} `}>
        <span className="nav11-text">{props.text5}</span>
        <span className="nav11-link">{props.text11}</span>
        <span className="nav11-text1">{props.text21}</span>
        <span className="nav11-text2">{props.text31}</span>
        <span className="nav11-text3">{props.text41}</span>
        <span className="nav11-text4">{props.text411}</span>
      </nav>
      <style jsx>
        {`
          .nav11-nav {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .nav11-text {
            text-align: center;
            text-decoration: none;
          }
          .nav11-link {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav11-text1 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav11-text2 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav11-text3 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }
          .nav11-text4 {
            text-align: center;
            margin-left: 32px;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .nav11-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .nav11-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav11-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav11-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav11-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav11-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav11-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Nav11.defaultProps = {
  rootClassName1: '',
  text5: 'Tuinblogs',
  text11: 'Tuincentrum Leveranciers',
  text21: 'Garden Centres UK',
  text31: 'Garden Centres CA',
  text41: 'Webshops IR',
  text411: 'Webshops UK',
  rootClassName: '',
}

Nav11.propTypes = {
  rootClassName1: PropTypes.string,
  text5: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  text31: PropTypes.string,
  text41: PropTypes.string,
  text411: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav11
