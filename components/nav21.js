import React from 'react'

import PropTypes from 'prop-types'

const Nav21 = (props) => {
  return (
    <>
      <nav className={`nav21-nav ${props.rootClassName} `}>
        <span className="nav21-text">{props.text5}</span>
        <span className="nav21-text1">{props.text11}</span>
        <span className="nav21-text2">{props.text21}</span>
        <span className="nav21-text3">{props.text31}</span>
        <span className="nav21-text4">{props.text41}</span>
      </nav>
      <style jsx>
        {`
          .nav21-nav {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .nav21-text {
            text-decoration: none;
          }
          .nav21-text1 {
            margin-left: 32px;
            text-decoration: none;
          }
          .nav21-text2 {
            margin-left: 32px;
            text-decoration: none;
          }
          .nav21-text3 {
            margin-left: 32px;
            text-decoration: none;
          }
          .nav21-text4 {
            margin-left: 32px;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .nav21-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .nav21-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav21-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav21-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav21-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav21-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Nav21.defaultProps = {
  rootClassName1: '',
  text5: 'Divers',
  text11: 'Dierenwinkels',
  text21: 'Tuincentra BE | NL',
  text31: 'Webshops BE | NL',
  text41: 'Garden Blogs',
  rootClassName: '',
}

Nav21.propTypes = {
  rootClassName1: PropTypes.string,
  text5: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  text31: PropTypes.string,
  text41: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav21
